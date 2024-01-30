import {collection, addDoc, query, getDocs, doc, updateDoc, deleteDoc, where} from 'firebase/firestore'
import {db} from "../firebase/firebase"



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


    async fetchRecipes(userId) {
        const collectionRef = collection(db, this.collection)
        const q = query(collectionRef, where("user", "==", userId))
        const querySnapshot = await getDocs(q)

        const recipes = []
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            const recipe = {name: data.name, description: data.description}
            recipes.push(recipe)
        })
        return recipes
    }
    
    async deleteRecipe(recipeId) {
        const docRef = doc(db, this.collection, recipeId)
        await deleteDoc(docRef)
    }

}

const service = new RecipeService()
export default service