const { getAll } = require("./controller/drugs.js");

const renderTable = (data) => {
	const tableBody = document.getElementById("table-body");

	if (!tableBody) {
		throw new Error("No table element found");
	}

	let source = data;

	const rows = source.reduce(
		(acc, { id, drug_company, drug_name, drug_name_generic }) =>
			acc +
			`<tr id="table-row-${id}"><td>${id}</td><td>${drug_company}</td><td>${drug_name}</td><td>${drug_name_generic}</td></tr>`,
		``
	);

	tableBody.innerHTML = rows;
};

getAll().then(({ data }) => {
	renderTable(data);
});

window.onSubmit = (event) => {
	event.preventDefault();

	const id = event.target.id.value;
	const drug_company = event.target.drug_company.value;
	const drug_name = event.target.drug_name.value;
	const drug_name_generic = event.target.drug_name_generic.value;

	getAll({ id, drug_company, drug_name, drug_name_generic }).then(({ data }) =>
		renderTable(data)
	);
};

window.onReset = () => {
	getAll().then(({ data }) => renderTable(data));
};
