import {collection, addDoc, query, getDocs, doc, updateDoc, deleteDoc} from 'firebase/firestore'
import {db} from "../firebase/firebase"
import Recipe from "../models/recipe"


class RecipeService {
    constructor() {
        this.collection = 'drinks'
    }

    async createDrink(recipe, userId) {
        const collectionRef = collection(db, this.collection)
        const docRef = await addDoc(collectionRef, {
            user: userId,
            name: recipe.name,
            description: recipe.description
        })
        return recipe
    }
    
    async deleteRecipe(recipeId) {
        const docRef = doc(db, this.collection, recipeId)
        await deleteDoc(docRef)
    }

}

const service = new RecipeService()
export default service