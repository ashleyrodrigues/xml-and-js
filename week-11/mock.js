const loadData = ( path, callback) => {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = ({ target }) => {
		if (target.readyState == 4 && target.status == 200) {
			callback(JSON.parse(target.response));
		}
	};
	xhttp.open("GET", path, true);
	xhttp.send();
};


const renderTable = (data,searchTerm) => {
    const table = document.getElementById("html-table");
    if (searchTerm) {
  
      data = data.filter(
        ({ first_name, last_name, email, gender, start_time, end_time}) =>
          last_name.toLowerCase().includes(searchTerm) ||
          first_name.toLowerCase().includes(searchTerm) ||
          email.toLowerCase().includes(searchTerm) ||
          gender.toLowerCase().includes(searchTerm) ||
          start_time.toLowerCase().includes(searchTerm) ||
          end_time.toLowerCase().includes(searchTerm)
      );
    }  
    let rows = ""
    data.map(
      ({ id, first_name, last_name, email, gender, start_time,end_time}) => {
        rows += `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${gender}</td><td>${start_time}</td><td>${end_time}</td></tr>`
      });
      console.log(rows)
      table.innerHTML = rows;
  };
  
  const onSubmit = (event) => {
	event.preventDefault();
	const searchTerm = event.target.search.value;
	loadData("./data.json",(data) => renderTable(data, searchTerm));
};

const onReset = () => {
	loadData("./data.json",(data) => renderTable(data));
};


  loadData("./data.json", (data) => renderTable(data))
  
  