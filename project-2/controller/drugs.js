const drugs = require("../data/drugs");

const getAll = (data = {}) =>
	new Promise((resolve) => {
		let result = Array.from(drugs);
		if (data.id) {
			result = result.filter((elm) => elm.id === parseInt(data.id));
		}
		if (data.drug_company) {
			result = result.filter((elm) => elm.drug_company.toLowerCase().includes(data.drug_company));
		}
		if (data.drug_name) {
			result = result.filter((elm) => elm.drug_name.toLowerCase().includes(data.drug_name));
		}
		if (data.drug_name_generic) {
			result = result.filter((elm) => elm.drug_name_generic.toLowerCase().includes(data.drug_name_generic));
		}
		resolve({ code: 200, data: result });
	});

const getById = (id) =>
	new Promise((resolve) => {
		const drug = drugs.find((drug) => drug.id === id);

		if (drug) {
			resolve({ code: 200, data: drug });
		} else {
			resolve({
				code: 404,
				data: { message: `No drug found for id ${id}` },
			});
		}
	});

module.exports = {
	getAll,
	getById,
};
