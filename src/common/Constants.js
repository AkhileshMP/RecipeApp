import React from 'react';
import {Dimensions} from 'react-native'
import Images from './Images'

const {width, height} = Dimensions.get('window')

const Constants = {
    width: width,
    height: height,
    fontFamily: "Roboto-Regular",
    fontHeader: "Roboto-Bold",
    fontFamilyBold: "Roboto-Bold",
    fontFamilyExtraBold: "Roboto-Black",
    recipes: [
        {
          id: '1',
          title: 'Chicken Biriyani',
            image: Images.image1,
            ingredients: [
                "300g basmati rice", "25g butter", "1 large onion, finely sliced", "1 bay leaf", "3 cardamom pods", "small cinnamon stick", "1 tsp turmeric", "4 skinless chicken breasts, cut into large chunks",
                "4 tbsp balti curry paste", "85g raisins", "850ml chicken stock",
                "30g coriander, ½ chopped, ½ leaves picked and 2 tbsp toasted flaked almonds, to serve"
            ],
            steps: [
                "Soak 300g basmati rice in warm water, then wash in cold until the water runs clear.",
                "Heat 25g butter in a saucepan and cook 1 finely sliced large onion with 1 bay leaf, 3 cardamom pods and 1 small cinnamon stick for 10 mins.",
                "Sprinkle in 1 tsp turmeric, then add 4 chicken breasts, cut into large chunks, and 4 tbsp curry paste. Cook until aromatic.",
                "Stir the rice into the pan with 85g raisins, then pour over 850ml chicken stock.",
                "Place a tight-fitting lid on the pan and bring to a hard boil, then lower the heat to a minimum and cook the rice for another 5 mins.",
                "Turn off the heat and leave for 10 mins. Stir well, mixing through 15g chopped coriander. To serve, scatter over the leaves of the remaining 15g coriander and 2 tbsp toasted almonds."
            ]
        },
        {
          id: '2',
          title: 'Chicken Curry',
          image: Images.image1,
          ingredients: [
            "150 grams Chicken Breast", "2 Tsp Ghee", "50 grams Onion", "1 Tsp Ginger Garlic Paste", "50 grams Tomato Puree",
            "200 ml Water extra if needed.", "1/2 Tsp Turmeric", "1/2 Tsp Kashmiri Red Chilli Powder", "1/2 Tsp Cumin Powder",
            "1/2 Tsp Coriander Powder", "1/2 Tsp Garam Masala Powder", "10 grams Coriander"
          ],
          steps: [
            "Start by heating 1 tsp of ghee in a pan and season with salt and pepper in the shape of a breast and place the breast on top. Then season the other side.",
            "Cook the breast for about 3-4 minutes on each side. Get a nice crust and then remove from the pan and rest. Chop the onions sautee style.",
            "Add the onions and remaining ghee and cook on medium and brown the onions. The browner the more flavour.",
            "Once they are nicely brown add in the ginger garlic paste and sautee for a minute before adding in the spices. Sautee for a minute before deglazing with water and adding in the puree.",
            "Cover and cook for 6-8 minutes.", "Meanwhile butterfly the chicken and slice into thin strips.",
            "Add back to the pan and finish cooking. If you want the gravy to be more saucy add water as needed. If you want it super thick, then reduce it before adding in the chicken.",
            "Finish with coriander and serve."
          ]
        },
        {
            id: '3',
            title: 'Chicken Biriyani',
            image: Images.image1,
            ingredients: [
                "300g basmati rice", "25g butter", "1 large onion, finely sliced", "1 bay leaf", "3 cardamom pods", "small cinnamon stick", "1 tsp turmeric", "4 skinless chicken breasts, cut into large chunks",
                "4 tbsp balti curry paste", "85g raisins", "850ml chicken stock",
                "30g coriander, ½ chopped, ½ leaves picked and 2 tbsp toasted flaked almonds, to serve"
            ],
            steps: [
                "Soak 300g basmati rice in warm water, then wash in cold until the water runs clear.",
                "Heat 25g butter in a saucepan and cook 1 finely sliced large onion with 1 bay leaf, 3 cardamom pods and 1 small cinnamon stick for 10 mins.",
                "Sprinkle in 1 tsp turmeric, then add 4 chicken breasts, cut into large chunks, and 4 tbsp curry paste. Cook until aromatic.",
                "Stir the rice into the pan with 85g raisins, then pour over 850ml chicken stock.",
                "Place a tight-fitting lid on the pan and bring to a hard boil, then lower the heat to a minimum and cook the rice for another 5 mins.",
                "Turn off the heat and leave for 10 mins. Stir well, mixing through 15g chopped coriander. To serve, scatter over the leaves of the remaining 15g coriander and 2 tbsp toasted almonds."
            ]
        },
        {
            id: '4',
            title: 'Chicken Curry',
            image: Images.image1,
            ingredients: [
                "150 grams Chicken Breast", "2 Tsp Ghee", "50 grams Onion", "1 Tsp Ginger Garlic Paste", "50 grams Tomato Puree",
                "200 ml Water extra if needed.", "1/2 Tsp Turmeric", "1/2 Tsp Kashmiri Red Chilli Powder", "1/2 Tsp Cumin Powder",
                "1/2 Tsp Coriander Powder", "1/2 Tsp Garam Masala Powder", "10 grams Coriander"
              ],
              steps: [
                "Start by heating 1 tsp of ghee in a pan and season with salt and pepper in the shape of a breast and place the breast on top. Then season the other side.",
                "Cook the breast for about 3-4 minutes on each side. Get a nice crust and then remove from the pan and rest. Chop the onions sautee style.",
                "Add the onions and remaining ghee and cook on medium and brown the onions. The browner the more flavour.",
                "Once they are nicely brown add in the ginger garlic paste and sautee for a minute before adding in the spices. Sautee for a minute before deglazing with water and adding in the puree.",
                "Cover and cook for 6-8 minutes.", "Meanwhile butterfly the chicken and slice into thin strips.",
                "Add back to the pan and finish cooking. If you want the gravy to be more saucy add water as needed. If you want it super thick, then reduce it before adding in the chicken.",
                "Finish with coriander and serve."
              ]
        },
        {
            id: '5',
            title: 'Chicken Biriyani',
            image: Images.image1,
            ingredients: [
                "150 grams Chicken Breast", "2 Tsp Ghee", "50 grams Onion", "1 Tsp Ginger Garlic Paste", "50 grams Tomato Puree",
                "200 ml Water extra if needed.", "1/2 Tsp Turmeric", "1/2 Tsp Kashmiri Red Chilli Powder", "1/2 Tsp Cumin Powder",
                "1/2 Tsp Coriander Powder", "1/2 Tsp Garam Masala Powder", "10 grams Coriander"
              ],
              steps: [
                "Start by heating 1 tsp of ghee in a pan and season with salt and pepper in the shape of a breast and place the breast on top. Then season the other side.",
                "Cook the breast for about 3-4 minutes on each side. Get a nice crust and then remove from the pan and rest. Chop the onions sautee style.",
                "Add the onions and remaining ghee and cook on medium and brown the onions. The browner the more flavour.",
                "Once they are nicely brown add in the ginger garlic paste and sautee for a minute before adding in the spices. Sautee for a minute before deglazing with water and adding in the puree.",
                "Cover and cook for 6-8 minutes.", "Meanwhile butterfly the chicken and slice into thin strips.",
                "Add back to the pan and finish cooking. If you want the gravy to be more saucy add water as needed. If you want it super thick, then reduce it before adding in the chicken.",
                "Finish with coriander and serve."
              ]
        },
        {
            id: '6',
            title: 'Chicken Curry',
            image: Images.image1,
            ingredients: [
                "150 grams Chicken Breast", "2 Tsp Ghee", "50 grams Onion", "1 Tsp Ginger Garlic Paste", "50 grams Tomato Puree",
                "200 ml Water extra if needed.", "1/2 Tsp Turmeric", "1/2 Tsp Kashmiri Red Chilli Powder", "1/2 Tsp Cumin Powder",
                "1/2 Tsp Coriander Powder", "1/2 Tsp Garam Masala Powder", "10 grams Coriander"
              ],
              steps: [
                "Start by heating 1 tsp of ghee in a pan and season with salt and pepper in the shape of a breast and place the breast on top. Then season the other side.",
                "Cook the breast for about 3-4 minutes on each side. Get a nice crust and then remove from the pan and rest. Chop the onions sautee style.",
                "Add the onions and remaining ghee and cook on medium and brown the onions. The browner the more flavour.",
                "Once they are nicely brown add in the ginger garlic paste and sautee for a minute before adding in the spices. Sautee for a minute before deglazing with water and adding in the puree.",
                "Cover and cook for 6-8 minutes.", "Meanwhile butterfly the chicken and slice into thin strips.",
                "Add back to the pan and finish cooking. If you want the gravy to be more saucy add water as needed. If you want it super thick, then reduce it before adding in the chicken.",
                "Finish with coriander and serve."
              ]
        }
    ],
}
export default Constants;
