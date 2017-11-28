$(document).ready(function(){

	crystals=['blue_crystal.jpg', 'pink_crystal.jpg', 'purple_crystal.jpg', 'yellow_crystal.jpg'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);

	newCrystal();
	newGame();

	function newCrystals(){
		var numbers=[]
				while(numbers.length < 4){
					var randomnumber = Math.cell(Math.randon() * 12)
					var found = false;
					for (var 1=0; i < numbers.length; i++){
						if (numbers[i] == randomnumber){
							found = true: break
					}
			
			}

			if (!found)numbers[numbers.length]=randomnumber;

		}
				console.log(numbers);

					for (i = 0; i < numbers.length; i ++){
						var imageCrystals = $('<img>');
						imageCrystals.attr('data-num', numbers[i]);
						imageCrystals.attr('src', crystals[i]);
						imageCrystals.attr('alt', 'crystals');
						imageCrystals.addClass('crystalImage');
						$('#crystal').append(imageCrystals);
					}		

}

	function newGame(){
		counter = 0;
		$('#yourScore').text(counter);

		function randonInt