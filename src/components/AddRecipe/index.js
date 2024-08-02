import * as React from 'react';
import { useState, useCallback, useRef, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, Images, Icons } from './../../common';
import styles from './styles';
import { Recipe } from './../../components'
import { actions } from './../../redux/UserRedux';

const AddRecipe = ({ goBack, gotoDetails }) => {

  const dispatch = useDispatch();

  const [recipeItem, setItem] = useState(null)
  const [recipeIndex, setIndex] = useState(0)
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])
  const [ingredient, setIngredient] = useState('')
  const [step, setStep] = useState('')
  const [isUpdate, setIsUpdate] = useState(false)

  const recipeList = useSelector((state) => state.user.recipe);

  const titleRef = useRef();
  const stepRef = useRef();
  const ingredientRef = useRef(); 

  const updateRecipe = useCallback((list) => {
    dispatch(actions.updateRecipe(list));
  }, [dispatch]);

  const addRecipe = useCallback((list) => {
    dispatch(actions.addRecipe(list));
  }, [dispatch]);

  useEffect(()=>{
    

  }, [recipeList])

  const onTitleEditHandle = (title) => setTitle(title);
  const onStepEditHandle = (step) => setStep(step);
  const onIngredientEditHandle = (ingredient) => setIngredient(ingredient);

  const onUpdate = (item, index) => {
    setItem(item);
    setIndex(index)
    setTitle(item.title);
    setIngredients(item.ingredients);
    setSteps(item.steps)
    setIsUpdate(true)
  }

  const addValue = (value, list) => {
    let arr = [];
    arr.push(value)
    arr = [
      ...list,
      ...arr
    ]
    return(arr);
  }

  const removeValue = (item, list) => {
    let items = list.filter(itm => itm != item)
    return(items);
  }

  const clearValues = () => {
    setItem(null);
    setIndex(0)
    setTitle('');
    setIngredients([]);
    setSteps([])
    setIsUpdate(false)
  }

  const saveRecipe = async() => {
    let value = {
      id: isUpdate == true ? recipeItem.id : recipeList[recipeList.length - 1].id + 1,
      title: title,
      image: Images.image1,
      ingredients: ingredients,
      steps: steps
    }
    let list = recipeList
    if(isUpdate == true){
      list[recipeIndex] = value;
      await updateRecipe(list)
      toast('Updated successfully')
    }else{
      list.push(value);
      await addRecipe(list)
      toast('Added successfully')
    }
    clearValues();
  }

  //toast messages
  const toast = (message) => {
    Toast.show(message, 6);
  }
  
  const renderRecipeItem = ({ item, index }) => (
    <Recipe 
    item={item}
    inFavourites={false}
    gotoDetails={gotoDetails}
    isHorizontal={true}
    onUpdate={() => onUpdate(item, index)}
    />
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
      <Text style={styles.header}>All Recipes</Text>
      <View style={{height: 220}}>
      <FlatList
        data={recipeList}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </View>
        <>
          <View style={[styles.rowView]}>
            <Text style={[styles.header]}>{isUpdate == true ? 'Update Recipes' : 'Add Recipes' }</Text>
            <TouchableOpacity 
              style={[styles.butnView, styles.centerView, styles.rightView]}
              onPress={saveRecipe}>
                  <Text style={styles.txtView}>{'Save'}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.inputwrap, styles.rowView, {marginTop: 15}]}>
            <TextInput
              style={styles.input}
              //underlineColorAndroid='transpaent'
              underlineColorAndroid="transparent"
              placeholderTextColor={Colors.gray}
              placeholder={'Enter title'}
              ref={titleRef}
              onChangeText={onTitleEditHandle}
              allowFontScaling={false}
              returnKeyType='go'
              value={title}
            />
          </View>
          <View style={[styles.inputwrap, styles.rowView]}>
            <TextInput
              style={styles.input}
              //underlineColorAndroid='transpaent'
              underlineColorAndroid="transparent"
              placeholderTextColor={Colors.gray}
              placeholder={'Enter ingredients'}
              ref={ingredientRef}
              onChangeText={onIngredientEditHandle}
              allowFontScaling={false}
              returnKeyType='go'
              value={ingredient}
            />
            <TouchableOpacity 
                style={[styles.addView, styles.centerView]}
                onPress={() => {
                  setIngredients(addValue(ingredient, ingredients))
                  }}>
                    <Icon name={Icons.MaterialCommunityIcons.Plus} size={22} color={Colors.gray}/>
              </TouchableOpacity>
          </View>
          {ingredients.length > 0 && (
            <>
            {ingredients.map((item, index) => (
              <View style={[styles.rowView, styles.itemView]}>
                <Text style={styles.txtView}>{index + 1}</Text>
                <Text style={[styles.txtView, styles.ingrView]} numberOfLines={5}>{item}</Text>
                <TouchableOpacity 
                  style={[styles.rightView, styles.centerView]}
                  onPress={() => {
                    setIngredients(removeValue(item, ingredients))
                    }}>
                      <Icon name={Icons.MaterialCommunityIcons.Delete} size={20} color={Colors.gray}/>
                </TouchableOpacity>

              </View>
            ))}
            </>
          )}
          <View style={[styles.inputwrap, styles.rowView]}>
            <TextInput
              style={styles.input}
              //underlineColorAndroid='transpaent'
              underlineColorAndroid="transparent"
              placeholderTextColor={Colors.gray}
              placeholder={'Enter steps'}
              ref={stepRef}
              onChangeText={onStepEditHandle}
              allowFontScaling={false}
              returnKeyType='go'
              value={step}
            />
            <TouchableOpacity 
                style={[styles.addView, styles.centerView]}
                onPress={() => {
                  setSteps(addValue(step, steps));
                  }}>
                    <Icon name={Icons.MaterialCommunityIcons.Plus} size={22} color={Colors.gray}/>
              </TouchableOpacity>
          </View>
          {steps.length > 0 && (
            <>
            {steps.map((item, index) => (
              <View style={[styles.rowView, styles.itemView]}>
                <Text style={styles.txtView}>{index + 1}</Text>
                <Text style={[styles.txtView, styles.ingrView, {lineHeight: 18}]} numberOfLines={5}>{item}</Text>
                <TouchableOpacity 
                  style={[styles.rightView, styles.centerView]}
                  onPress={()=>{
                    setSteps(removeValue(item, steps))
                    }}>
                      <Icon name={Icons.MaterialCommunityIcons.Delete} size={20} color={Colors.gray}/>
                </TouchableOpacity>
              </View>
            ))}
            </>
          )}
        </>
        </ScrollView>
    </View>
  );
}
export default AddRecipe;