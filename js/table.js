var content = {
				heading: 'My Collegues',
				table: [
					{'ID': 1,	'FirstName': 'Alexa',		'LastName': 'Wilder',		'Occupation': 'Designer'},
					{'ID': 2,	'FirstName': 'Avram',	'LastName': 'Allison',		'Occupation': 'Front-end developer'},
					{'ID': 3,	'FirstName': 'Basia',	'LastName': 'Harrell',		'Occupation': 'Front-end developer'},
					{'ID': 4,	'FirstName': 'Bryar',	'LastName': 'Long',	'Occupation': 'Designer'},
					{'ID': 5,	'FirstName': 'Cruz',		'LastName': 'Reynolds',	'Occupation': 'C# .NET developer'},
					{'ID': 6,	'FirstName': 'Dexter',		'LastName': 'Smith',		'Occupation': 'Front-end developer'},
					{'ID': 7,	'FirstName': 'Dustin',	'LastName': 'Martinez',	'Occupation': 'Account manager'},
					{'ID': 8,	'FirstName': 'Hamilton',	'LastName': 'Jackson',		'Occupation': 'C# .NET developer'},
					{'ID': 9,	'FirstName': 'Ifeoma',		'LastName': 'Dier',		'Occupation': 'C# .NET developer'},
					{'ID': 10,	'FirstName': 'Indigo',		'LastName': 'Barnes',		'Occupation': 'Front-end developer'},
					{'ID': 11,	'FirstName': 'Gabriel',	'LastName': 'Barkley',		'Occupation': 'Front-end developer'},
					{'ID': 12,	'FirstName': 'Peter',		'LastName': 'Burton',		'Occupation': 'C# .NET developer'},
					{'ID': 13,	'FirstName': 'John',		'LastName': 'Peterson',		'Occupation': 'Marketing'},
					{'ID': 14,	'FirstName': 'Stenley',	'LastName': 'Kelly',		'Occupation': 'Front-end developer'},
					{'ID': 15,	'FirstName': 'Martin',		'LastName': 'Crouch',	'Occupation': 'DBA'},
					{'ID': 16,	'FirstName': 'Bryan',		'LastName': 'Smith',	'Occupation': 'DBA'},
					{'ID': 17,	'FirstName': 'Josh',		'LastName': 'Oliver',		'Occupation': 'Team Leader'},
					{'ID': 18,	'FirstName': 'Johnny',		'LastName': 'Garrison',		'Occupation': 'Team Leader'},
					{'ID': 19,	'FirstName': 'Nicole',		'LastName': 'Williams',	'Occupation': 'Product manager'},
					{'ID': 20,	'FirstName': 'Rachel',	'LastName': 'Long',		'Occupation': 'Project manager'}
				]
			};
			
			
function renderTable(){ 
 //Create an HTML Table element.
    var tableGrid = document.createElement("table");
    	tableGrid.border = "1";
//Get the count of columns.	
    var JSONheading = content.heading,
		countColumns = content.table.length;	
//Add header
	var closeth = '</th>'
	var row = tableGrid.insertRow(-1);
    var tableHead = document.createElement("th");
		tableHead.colSpan = 4;
    	tableHead.innerHTML = JSONheading+closeth;
   		row.appendChild(tableHead);	   		
//Add the data rows.
    for (var i = 0; i < countColumns; i++) {
        row = tableGrid.insertRow(-1);
        var cellID = row.insertCell(-1);
            cellID.innerHTML = content.table[i].ID;
		var cellFirstName = row.insertCell(-1);
            cellFirstName.innerHTML = content.table[i].FirstName;
		var cellLastName = row.insertCell(-1);
            cellLastName.innerHTML = content.table[i].LastName;
		var cellOccupation = row.insertCell(-1);
            cellOccupation.innerHTML = content.table[i].Occupation;
    }	
//Append generated table to the div
var htmlTable = document.getElementById("table");
    htmlTable.innerHTML = "";
    htmlTable.appendChild(tableGrid);
}
