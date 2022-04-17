## Project 2

* The data consists of 4 fields. You can apply filters on all of these fields using the textboxes present in the form element.
* On clicking apply filter, the parameters in the textfields is passed to the getAll function. This function first fetches the data from the json file and then filters this data based on the parameters.
* This data is then passed to the renderTable method which then renders each row of the table.
* The reset button clears all the textfields and the getAll function is called again. Since the textboxes are empty, the data is fetched and passed to the renderTable method without any filters. Thus displaying all the data present in the JSON file.
