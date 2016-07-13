
function CreationTableauLangages (){
	return ["Html","CSS","Java","PHP"];

}

function CreationTableauNombres (){
	return [0,1,2,3,4,5];
}

function RemplacementElement (langages){
	langages[2] = 'Javascript';
	return langages;
}

function AjoutElementLangages (langages) {
	langages.push('Ruby','Python');
	return langages;
}

function AjoutElementNombres(nombres) {
	nombres.unshift(-2,-1);
	return nombres;
}

function SuppressionPremierElement(langages) {
	langages.shift();
	return langages;
}

function SuppressionDernierElement(langages) {
	langages.pop();
	return langages;
}

function ConversionChaineTableau(reseaux_sociaux_chaine) {
	var reseaux_sociaux = reseaux_sociaux_chaine.split(',');
	return reseaux_sociaux;
}

function ConversionTableauChaine(langages) {
	var langages_chaine = langages.join(',');
	return langages_chaine;
}

function TriTableau(reseaux_sociaux) {
	 reseaux_sociaux.sort();
	return reseaux_sociaux;
}

function InversionTableau(langages) {
	 langages.reverse();
	return langages;
}

function TriSpecial(langages) {
return langages.sort( function (a, b){
       return a.length - b.length});
}	
