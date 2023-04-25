userName = prompt('What\'s your name?');
editUserName = `${userName[0].toUpperCase()}${userName.slice(1,userName.length)}`;
country = prompt('Which country would you like to travel to?');
editCountryName = `${country[0].toUpperCase()}${country.slice(1,country.length)}`;
season = prompt('In which season would you like to travel there?');
alert('Hello, ' + editUserName + '! I hope you\'ll enjoy your trip to ' + editCountryName + ' in ' + season + '! The sights are fascinating there!');

number = prompt('Please enter a five-digit number.');
alert(number.replaceAll('', ' '));