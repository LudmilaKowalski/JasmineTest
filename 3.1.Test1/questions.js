
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let a = texte1
    let b = texte2;
    return  a+b;

}
let afficherCar5 =  (texte) => {
    let a = texte
    return a.substr(4,1)
}
let afficher9Car =  (texte) => {
    let a = texte
    return a.substr(0,9)
}
let majusculeString =  (texte) => {
    let a = texte
    return a.toUpperCase()
}
let minusculeString =  (texte) => {
    let a = texte
    return a.toLowerCase()
}
let SupprEspaceString =  (texte) => {
    let a = texte
    return a.trim()
}
let IsString =  (texte) => {
    let a = texte
    if (a=typeof 'Est ce une chaine de caractères ?') {
        return true
    }
    else {
        return false
    }
}

let AfficherExtensionString =  (texte) => {
    let a = texte
    return a.substring(a.lastIndexOf('.') + 1); 

}
let NombreEspaceString =  (texte) => {
    let a = texte
    return a.split(' ').length - 1;
}
let InverseString =  (texte) => {
    let a = texte
    return a.split('').reverse().join('')

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
 
  return (Math.pow(2, 3))

}
let valeurAbsolue =  (nombre) => {
    let a =nombre
    return Math.abs(a)

}
let valeurAbsolueArray =  (array) => {
    let a = array 
    return a.map(Math.abs, a)

}
let sufaceCercle =  (rayon) => {
    let a = rayon
    let b = a* Math.PI * a
    return Math.round(b)
}
let hypothenuse =  (ab, ac) => {
    let a = ab
    let b = ac
    let c = Math.pow(a,2) + Math.pow(b,2) 
    return Math.sqrt(c)

}
let calculIMC =  (poids, taille) => {
    let a = poids
    let b = taille
    let c = Math.pow(b,2)
    let d = a/c

    return Math.round(d * 100) / 100

}
