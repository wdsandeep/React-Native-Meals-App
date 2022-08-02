// import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';
// MEALS

function FavoritesScreen () {
    // const favoriteMealsCtx = useContext(FavoritesContext);

    // const favoriteMeals = MEALS.filter((meal) =>  favoriteMealsCtx.ids.includes(meal.id));
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter((meal) =>  favoriteMealIds.includes(meal.id));
    
    // console.log(favoriteMeals);
    if(favoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    }
    return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
})