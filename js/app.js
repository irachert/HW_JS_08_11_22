var htmlString = '';

countries.forEach(item => {
	htmlString += `
	<tr>
		<td>${item.name.common}</td>
		<td>${item.region}</td>
		<td>${item.population}</td>
		<td>
			<img style="width: 4rem" src=${item.flags.png} alt="flag"/>
		</td>
	</tr>
	`;
});

document.getElementById('countries-list').innerHTML = htmlString;