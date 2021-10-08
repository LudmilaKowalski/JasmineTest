let CreationTableauLangages =  () => {
    let array = ["Html","CSS","Java","PHP"]

    return array
}

let CreationTableauNombres =  () => {
    let array = [0, 1, 2, 3, 4, 5] 

    return array 
}

let RemplacementElement =  (langages) => {
    langages[2] = "Javascript"

    
   return langages

}

let AjoutElementLangages =  (langages) => {
    let a = langages
    let b = a.push("Ruby", "Python")

    return a

}

let AjoutElementNombres =  (nombres) => {
    let a = nombres
    let b = a.unshift(-2, -1)

    return a

}

let SuppressionPremierElement =  (langages) => {
    let a = langages
    let b = a.shift()

    return a

}

let SuppressionDernierElement =  (langages) => {
    let a = langages
    let b = a.pop()

    return a


}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let a = reseaux_sociaux_chaine;
    

return a.split(",")  

}

let ConversionTableauChaine =  (langages) => {
    let a = langages

    return a.toString();

}

let TriTableau =  (reseaux_sociaux) => {
    let a = reseaux_sociaux

    return a.sort()

}

let InversionTableau =  (langages) =>{
    let a =langages

    return a.reverse()

}
