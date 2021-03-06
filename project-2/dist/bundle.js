(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../data/drugs":2}],2:[function(require,module,exports){
module.exports=[
	{
		"id": 1,
		"drug_company": "Church & Dwight Co., Inc.",
		"drug_name": "Complete Care Tartar Control",
		"drug_name_generic": "Sodium Fluoride"
	},
	{
		"id": 2,
		"drug_company": "Procter & Gamble Manufacturing Company",
		"drug_name": "Olay Regenerist",
		"drug_name_generic": "Avobenzone, Homosalate, Octisalate, Octocrylene, and Oxybenzone"
	},
	{
		"id": 3,
		"drug_company": "Guerlain S.A.",
		"drug_name": "LINGERIE DE PEAU BB INVISIBLE SKIN-FUSION MULTI-PERFECTING MAKEUP WITH SUNSCREEN BROAD SPECTRUM SPF 30 MEDIUM",
		"drug_name_generic": "OCTINOXATE, OXYBENZONE, TITANIUM DIOXIDE"
	},
	{
		"id": 4,
		"drug_company": "Ventura Corporation LTD",
		"drug_name": "LBEL Couleur Luxe Rouge Amplifier XP amplifying SPF 15",
		"drug_name_generic": "Octinoxate and Oxybenzone"
	},
	{
		"id": 5,
		"drug_company": "Apotheca Company",
		"drug_name": "Inflammation",
		"drug_name_generic": "Asafoetida, Kalmia latifolia, Causticum, Coldhicum autumnale, Ferrum metallicum, Gnaphalium polycephalum, Lithium benzoicum"
	},
	{
		"id": 6,
		"drug_company": "Neutrogena Corporation",
		"drug_name": "Neutrogena Rapid Clear Acne Eliminating Spot",
		"drug_name_generic": "Salicylic Acid"
	},
	{
		"id": 7,
		"drug_company": "BluePoint Laboratories",
		"drug_name": "Diclofenac Sodium and Misoprostol",
		"drug_name_generic": "Diclofenac Sodium and Misoprostol"
	},
	{
		"id": 8,
		"drug_company": "Greer Laboratories, Inc.",
		"drug_name": "Allergenic Extracts Standardized Mite",
		"drug_name_generic": "Dermatophagoides pteronyssinus"
	},
	{
		"id": 9,
		"drug_company": "West-ward Pharmaceutical Corp.",
		"drug_name": "Neostigmine Methylsulfate",
		"drug_name_generic": "Neostigmine Methylsulfate"
	},
	{
		"id": 10,
		"drug_company": "Neutrogena Corporation",
		"drug_name": "Neutrogena MoistureShine Lip Soother",
		"drug_name_generic": "Octinoxate and Oxybenzone"
	},
	{
		"id": 11,
		"drug_company": "KAISER FOUNDATION HOSPITALS",
		"drug_name": "Metronidazole",
		"drug_name_generic": "Metronidazole"
	},
	{
		"id": 12,
		"drug_company": "Uriel Pharmacy Inc.",
		"drug_name": "Pancreas Meteoric Iron",
		"drug_name_generic": "Pancreas Meteoric Iron"
	},
	{
		"id": 13,
		"drug_company": "JAFRA COSMETICS INTERNATIONAL",
		"drug_name": "Quiet Rose Always color stay-on Makeup Broad Spectrum SPF 15",
		"drug_name_generic": "Octinoxate, Oxybenzone, Titanium Dioxide"
	},
	{
		"id": 14,
		"drug_company": "Greenstone LLC",
		"drug_name": "Fluconazole",
		"drug_name_generic": "fluconazole"
	},
	{
		"id": 15,
		"drug_company": "Best Choice",
		"drug_name": "Childrens Plus Cough and Runny Nose",
		"drug_name_generic": "ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HYDROBROMIDE"
	},
	{
		"id": 16,
		"drug_company": "NDC National Distribution & Contracting, Inc.",
		"drug_name": "Pro Advantage Instant Hand Sanitizer",
		"drug_name_generic": "ALCOHOL"
	},
	{
		"id": 17,
		"drug_company": "AstraZeneca LP",
		"drug_name": "ATACAND",
		"drug_name_generic": "Candesartan cilexetil"
	},
	{
		"id": 18,
		"drug_company": "Teva Pharmaceuticals USA Inc",
		"drug_name": "Moexipril Hydrochloride",
		"drug_name_generic": "Moexipril Hydrochloride"
	},
	{
		"id": 19,
		"drug_company": "Bayer HealthCare Pharmaceuticals Inc.",
		"drug_name": "Betapace AF",
		"drug_name_generic": "sotalol hydrochloride"
	},
	{
		"id": 20,
		"drug_company": "Nelco Laboratories, Inc.",
		"drug_name": "Rocky Mountain Juniper",
		"drug_name_generic": "Rocky Mountain Juniper"
	},
	{
		"id": 21,
		"drug_company": "Natural Health Supply",
		"drug_name": "INFLAMMATIONS",
		"drug_name_generic": "SODIUM NITRATE"
	},
	{
		"id": 22,
		"drug_company": "Baxter Healthcare Corporation",
		"drug_name": "Metoclopramide",
		"drug_name_generic": "Metoclopramide Hydrochloride"
	},
	{
		"id": 23,
		"drug_company": "NCS HealthCare of KY, Inc dba Vangard Labs",
		"drug_name": "Oxcarbazepine",
		"drug_name_generic": "Oxcarbazepine"
	},
	{
		"id": 24,
		"drug_company": "PD-Rx Pharmaceuticals, Inc.",
		"drug_name": "Digoxin",
		"drug_name_generic": "Digoxin"
	},
	{
		"id": 25,
		"drug_company": "REMEDYREPACK INC.",
		"drug_name": "Pentasa",
		"drug_name_generic": "mesalamine"
	},
	{
		"id": 26,
		"drug_company": "Nelco Laboratories, Inc.",
		"drug_name": "Dill",
		"drug_name_generic": "Dill"
	},
	{
		"id": 27,
		"drug_company": "The Mentholatum Company",
		"drug_name": "OXY Purifying Face Scrub",
		"drug_name_generic": "Salicylic Acid"
	},
	{
		"id": 28,
		"drug_company": "Mylan Pharmaceuticals Inc.",
		"drug_name": "Quinapril Hydrochloride and Hydrochlorothiazide",
		"drug_name_generic": "quinapril hydrochloride and hydrochlorothiazide"
	},
	{
		"id": 29,
		"drug_company": "Matrixx Initiatives, Inc.",
		"drug_name": "Zicam",
		"drug_name_generic": "zinc acetate and zinc gluconate"
	},
	{
		"id": 30,
		"drug_company": "Novartis Consumer Health",
		"drug_name": "Meijer NICOTINE TRANSDERMAL SYSTEM",
		"drug_name_generic": "NICOTINE"
	},
	{
		"id": 31,
		"drug_company": "Temmentec Ag",
		"drug_name": "La Prairie Switzerland",
		"drug_name_generic": "Avobenzone, Octinoxate, Octisalate"
	},
	{
		"id": 32,
		"drug_company": "Target Corporation",
		"drug_name": "up and up junior strength ibuprofen",
		"drug_name_generic": "Ibuprofen"
	},
	{
		"id": 33,
		"drug_company": "AstraZeneca LP",
		"drug_name": "PLENDIL",
		"drug_name_generic": "Felodipine"
	},
	{
		"id": 34,
		"drug_company": "Galderma Laboratories, L.P.",
		"drug_name": "Cetaphil",
		"drug_name_generic": "octocrylene, avobenzone"
	},
	{
		"id": 35,
		"drug_company": "American Sales Company",
		"drug_name": "Care One migraine relief",
		"drug_name_generic": "Acetaminophen, Aspirin, Caffeine"
	},
	{
		"id": 36,
		"drug_company": "ProPhase Labs, Inc.",
		"drug_name": "Cold-EEZE",
		"drug_name_generic": "Zinc Gluconate"
	},
	{
		"id": 37,
		"drug_company": "KMART CORPORATION",
		"drug_name": "ANTIBACTERIAL",
		"drug_name_generic": "TRICLOSAN"
	},
	{
		"id": 38,
		"drug_company": "Allergy Laboratories, Inc.",
		"drug_name": "PEPPERMINT",
		"drug_name_generic": "peppermint"
	},
	{
		"id": 39,
		"drug_company": "WEGMANS FOOD MARKETS INC",
		"drug_name": "ANTIBACTERIAL FOAMING",
		"drug_name_generic": "TRICLOSAN"
	},
	{
		"id": 40,
		"drug_company": "NCS HealthCare of KY, Inc dba Vangard Labs",
		"drug_name": "Amitriptyline Hydrochloride",
		"drug_name_generic": "Amitriptyline Hydrochloride"
	},
	{
		"id": 41,
		"drug_company": "New World Imports, Inc",
		"drug_name": "CareAll Medicated Chest Rub",
		"drug_name_generic": "Camphor, Menthol, Eucalyptus"
	},
	{
		"id": 42,
		"drug_company": "Unifirst First Aid Corporation",
		"drug_name": "MEDI-FIRST Cherry Cough Drops",
		"drug_name_generic": "MENTHOL"
	},
	{
		"id": 43,
		"drug_company": "Swiss American Products",
		"drug_name": "EltaMD UV Lip Balm",
		"drug_name_generic": "Lip Balm with Sunscreen"
	},
	{
		"id": 44,
		"drug_company": "Lupin Pharmaceuticals, Inc",
		"drug_name": "Famotidine",
		"drug_name_generic": "Famotidine"
	},
	{
		"id": 45,
		"drug_company": "Shionogi Inc.",
		"drug_name": "Zebutal",
		"drug_name_generic": "Butalbital, acetaminophen and caffeine"
	},
	{
		"id": 46,
		"drug_company": "PharmaDerm a division of Fougera Pharmaceuticals Inc.",
		"drug_name": "Zazole",
		"drug_name_generic": "TERCONAZOLE"
	},
	{
		"id": 47,
		"drug_company": "McKesson",
		"drug_name": "HEALTHMART NICOTINE TRANSDERMAL SYSTEM",
		"drug_name_generic": "NICOTINE"
	},
	{
		"id": 48,
		"drug_company": "Topco Associates LLC",
		"drug_name": "TopCare Sore Throat Cherry Flavor",
		"drug_name_generic": "BENZOCAINE, MENTHOL"
	},
	{
		"id": 49,
		"drug_company": "Solco Healthcare US LLC",
		"drug_name": "Carvedilol",
		"drug_name_generic": "Carvedilol"
	},
	{
		"id": 50,
		"drug_company": "TONYMOLY CO., LTD.",
		"drug_name": "TONYMOLY BCDATION",
		"drug_name_generic": "Titanium Dioxide, Zinc Oxide"
	},
	{
		"id": 51,
		"drug_company": "NCS HealthCare of KY, Inc dba Vangard Labs",
		"drug_name": "Naproxen",
		"drug_name_generic": "Naproxen"
	},
	{
		"id": 52,
		"drug_company": "CVS Pharmacy",
		"drug_name": "Petroleum",
		"drug_name_generic": "White Petrolatum"
	},
	{
		"id": 53,
		"drug_company": "Taro Pharmaceuticals U.S.A., Inc.",
		"drug_name": "metronidazole",
		"drug_name_generic": "metronidazole"
	},
	{
		"id": 54,
		"drug_company": "Uriel Pharmacy Inc.",
		"drug_name": "Aurum 30 Special Order",
		"drug_name_generic": "Aurum 30 Special Order"
	},
	{
		"id": 55,
		"drug_company": "REMEDYREPACK INC.",
		"drug_name": "Lidocaine Hydrochloride",
		"drug_name_generic": "LIDOCAINE HYDROCHLORIDE ANHYDROUS"
	},
	{
		"id": 56,
		"drug_company": "Breckenridge Pharmaceutical, Inc.",
		"drug_name": "Butalbital, Acetaminophen, Caffeine and Codeine Phosphate",
		"drug_name_generic": "Butalbital, Acetaminophen, Caffeine and Codeine Phosphate"
	},
	{
		"id": 57,
		"drug_company": "Lake Erie Medical DBA Quality Care Products LLC",
		"drug_name": "Doxazosin",
		"drug_name_generic": "Doxazosin Mesylate"
	},
	{
		"id": 58,
		"drug_company": "Keltman Pharmaceuticals Inc.",
		"drug_name": "Cyclobenzaprine Hydrochloride",
		"drug_name_generic": "CYCLOBENZAPRINE HYDROCHLORIDE"
	},
	{
		"id": 59,
		"drug_company": "NexMed (USA), Inc.",
		"drug_name": "Diphenhydramine",
		"drug_name_generic": "Diphenhydramine HCl, Zinc Acetate"
	},
	{
		"id": 60,
		"drug_company": "State of Florida DOH Central Pharmacy",
		"drug_name": "CLONIDINE HYDROCHLORIDE",
		"drug_name_generic": "clonidine hydrochloride"
	},
	{
		"id": 61,
		"drug_company": "Topco Associates LLC",
		"drug_name": "topcare nite time cold and flu relief",
		"drug_name_generic": "Acetaminophen, Dextromethorphan HBr, Doxylamine succinate"
	},
	{
		"id": 62,
		"drug_company": "NCS HealthCare of KY, Inc dba Vangard Labs",
		"drug_name": "Glipizide",
		"drug_name_generic": "Glipizide"
	},
	{
		"id": 63,
		"drug_company": "ZION SYNTHETIC FIBER CO., LTD.",
		"drug_name": "REBIRTH HAIR",
		"drug_name_generic": "PYRITHIONE ZINC"
	},
	{
		"id": 64,
		"drug_company": "Konsyl Pharmaceuticals, Inc.",
		"drug_name": "Konsyl Overnight Relief Senna Prompt",
		"drug_name_generic": "PLANTAGO SEED, SENNOSIDES"
	},
	{
		"id": 65,
		"drug_company": "REMEDYREPACK INC.",
		"drug_name": "Chlordiazepoxide Hydrochloride",
		"drug_name_generic": "Chlordiazepoxide Hydrochloride"
	},
	{
		"id": 66,
		"drug_company": "Ventura Corporation Ltd.",
		"drug_name": "EFFET PARFAIT",
		"drug_name_generic": "Octinoxate and Titanium Dioxide"
	},
	{
		"id": 67,
		"drug_company": "Supervalu Inc",
		"drug_name": "Equaline Naproxen Sodium",
		"drug_name_generic": "Naproxen sodium"
	},
	{
		"id": 68,
		"drug_company": "B. Braun Medical Inc.",
		"drug_name": "POTASSIUM CHLORIDE IN DEXTROSE",
		"drug_name_generic": "DEXTROSE and POTASSIUM CHLORIDE"
	},
	{
		"id": 69,
		"drug_company": "Procter & Gamble Manufacturing Co.",
		"drug_name": "Head and Shoulders 2in1",
		"drug_name_generic": "Pyrithione Zinc"
	},
	{
		"id": 70,
		"drug_company": "Gordon Laboratories",
		"drug_name": "Forma-Ray",
		"drug_name_generic": "FORMALDEHYDE"
	},
	{
		"id": 71,
		"drug_company": "Kroger Company",
		"drug_name": "Nicotine polacrilex",
		"drug_name_generic": "nicotine polacrilex"
	},
	{
		"id": 72,
		"drug_company": "Jani-Source, LLC",
		"drug_name": "Foaming Antimicrobial",
		"drug_name_generic": "TRICLOSAN"
	},
	{
		"id": 73,
		"drug_company": "NCS HealthCare of KY, Inc dba Vangard Labs",
		"drug_name": "Clonidine Hydrochloride",
		"drug_name_generic": "Clonidine Hydrochloride"
	},
	{
		"id": 74,
		"drug_company": "Cobalt Laboratories Inc.",
		"drug_name": "Simvastatin",
		"drug_name_generic": "simvastatin"
	},
	{
		"id": 75,
		"drug_company": "Qualitest Pharmaceuticals",
		"drug_name": "ENDOCET",
		"drug_name_generic": "Oxycodone and Acetaminophen"
	},
	{
		"id": 76,
		"drug_company": "Bayer HealthCare LLC - Consumer Care",
		"drug_name": "Alka-Seltzer Plus",
		"drug_name_generic": "Acetaminophen, Dextromethorphan hydrobromide, and Phenylephrine hydrochloride"
	},
	{
		"id": 77,
		"drug_company": "Baxter Healthcare Corporation",
		"drug_name": "TISSEEL",
		"drug_name_generic": "fibrinogen human and thrombin human"
	},
	{
		"id": 78,
		"drug_company": "Preferred Pharmaceuticals, Inc.",
		"drug_name": "METFORMIN HYDROCHLORIDE",
		"drug_name_generic": "METFORMIN HYDROCHLORIDE"
	},
	{
		"id": 79,
		"drug_company": "Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC",
		"drug_name": "Ibuprofen",
		"drug_name_generic": "Ibuprofen"
	},
	{
		"id": 80,
		"drug_company": "Aphena Pharma Solutions - Tennessee, Inc.",
		"drug_name": "Effexor",
		"drug_name_generic": "venlafaxine hydrochloride"
	},
	{
		"id": 81,
		"drug_company": "Lake Erie Medical DBA Quality Care Products LLC",
		"drug_name": "Valsartan and Hydrochlorothiazide",
		"drug_name_generic": "Valsartan and Hydrochlorothiazide"
	},
	{
		"id": 82,
		"drug_company": "Contract Pharmacy Services-PA",
		"drug_name": "Hydrochlorothiazide",
		"drug_name_generic": "Hydrochlorothiazide"
	},
	{
		"id": 83,
		"drug_company": "Massco Dental A Division of Dunagin Pharmaceuticals",
		"drug_name": "ORTHO GUARD",
		"drug_name_generic": "SODIUM FLUORIDE"
	},
	{
		"id": 84,
		"drug_company": "ALK-Abello, Inc.",
		"drug_name": "ACER RUBRUM POLLEN",
		"drug_name_generic": "Maple Red"
	},
	{
		"id": 85,
		"drug_company": "AbbVie Inc.",
		"drug_name": "Synthroid",
		"drug_name_generic": "Levothyroxine Sodium"
	},
	{
		"id": 86,
		"drug_company": "Hospira, Inc.",
		"drug_name": "Lidocaine Hydrochloride",
		"drug_name_generic": "LIDOCAINE HYDROCHLORIDE"
	},
	{
		"id": 87,
		"drug_company": "Nomax Inc.",
		"drug_name": "Effer-K",
		"drug_name_generic": "POTASSIUM BICARBONATE"
	},
	{
		"id": 88,
		"drug_company": "Kremers Urban Pharmaceuticals Inc.",
		"drug_name": "Verapamil Hydrochloride",
		"drug_name_generic": "Verapamil Hydrochloride"
	},
	{
		"id": 89,
		"drug_company": "Dr. Reddy's Laboratories Limited",
		"drug_name": "Zoledronic Acid",
		"drug_name_generic": "Zoledronic Acid"
	},
	{
		"id": 90,
		"drug_company": "NCS HealthCare of KY, Inc dba Vangard Labs",
		"drug_name": "AcetaZOLAMIDE",
		"drug_name_generic": "AcetaZOLAMIDE"
	},
	{
		"id": 91,
		"drug_company": "CVS Pharmacy",
		"drug_name": "CVS Antiseptic Wash",
		"drug_name_generic": "BENZALKONIUM CHLORIDE AND LIDOCAINE HYDROCHLORIDE"
	},
	{
		"id": 92,
		"drug_company": "Clinical Solutions Wholesale",
		"drug_name": "LISINOPRIL AND HYDROCHLOROTHIAZIDE",
		"drug_name_generic": "LISINOPRIL AND HYDROCHLOROTHIAZIDE"
	},
	{
		"id": 93,
		"drug_company": "Liddell Laboratories, Inc.",
		"drug_name": "Back Pain and Sciatica",
		"drug_name_generic": "Aconitum napellus, Arnica montana, Belladonna, Cimicifuga racemosa, Euphorbium officinarum, Gelsemium sempervirens, Gnaphalium polycephalum, Hypericum perforatum,"
	},
	{
		"id": 94,
		"drug_company": "BioActive Nutritional, Inc.",
		"drug_name": "Candida Alb",
		"drug_name_generic": "Candida Albicans"
	},
	{
		"id": 95,
		"drug_company": "PSS World Medical, Inc.",
		"drug_name": "ETHYL ALCOHOL",
		"drug_name_generic": "ALCOHOL"
	},
	{
		"id": 96,
		"drug_company": "Sanum Kehlbeck GmbH & Co. KG",
		"drug_name": "Pleo Lat",
		"drug_name_generic": "bacillus cereus"
	},
	{
		"id": 97,
		"drug_company": "PD-Rx Pharmaceuticals, Inc.",
		"drug_name": "Detrol LA",
		"drug_name_generic": "tolterodine tartrate"
	},
	{
		"id": 98,
		"drug_company": "AAA Pharmaceutical, Inc.",
		"drug_name": "Cold Head Congestion Daytime / Nighttime",
		"drug_name_generic": "Acetaminophen, Chlorpheniramine Maleate, Dextromethorphan Hydrobromide, and Phenylephrine Hydrochloride"
	},
	{
		"id": 99,
		"drug_company": "ALK-Abello, Inc.",
		"drug_name": "PLANTAGO LANCEOLATA POLLEN",
		"drug_name_generic": "Plantain English"
	},
	{
		"id": 100,
		"drug_company": "Wal-Mart Stores Inc",
		"drug_name": "Equate Cleansing Pads",
		"drug_name_generic": "SALICYLIC ACID"
	},
	{
		"id": 101,
		"drug_company": "Epic Pharma, LLC",
		"drug_name": "Ursodiol",
		"drug_name_generic": "Ursodiol"
	},
	{
		"id": 102,
		"drug_company": "Unifirst First Aid Corporation",
		"drug_name": "MEDI-FIRST Non-Aspirin",
		"drug_name_generic": "Acetaminophen"
	},
	{
		"id": 103,
		"drug_company": "Stat Rx USA",
		"drug_name": "CITALOPRAM HYDROBROMIDE",
		"drug_name_generic": "CITALOPRAM HYDROBROMIDE"
	},
	{
		"id": 104,
		"drug_company": "Cardinal Health",
		"drug_name": "leader ibuprofen cold and sinus",
		"drug_name_generic": "Ibuprofen, Pseudoephedrine Hydrochloride"
	},
	{
		"id": 105,
		"drug_company": "Ventura Corporation LTD.",
		"drug_name": "CYZONE",
		"drug_name_generic": "Octinoxate and Oxybenzone"
	},
	{
		"id": 106,
		"drug_company": "BluePoint Laboratories",
		"drug_name": "Gabapentin",
		"drug_name_generic": "Gabapentin"
	},
	{
		"id": 107,
		"drug_company": "REMEDYREPACK INC.",
		"drug_name": "risperidone",
		"drug_name_generic": "risperidone"
	},
	{
		"id": 108,
		"drug_company": "Ventura Corporation Limited",
		"drug_name": "CYZONE",
		"drug_name_generic": "OCTINOXATE and OCTOCRYLENE"
	},
	{
		"id": 109,
		"drug_company": "PUREMEDY",
		"drug_name": "SKIN TAG RELIEF",
		"drug_name_generic": "CALENDULA OFFICINALIS FLOWER, SAMBUCUS NIGRA FLOWER, ECHINACEA ANGUSTIFOLIA, THUJA OCCIDENTALIS"
	},
	{
		"id": 110,
		"drug_company": "Baxter Healthcare Corporation",
		"drug_name": "TISSEEL",
		"drug_name_generic": "fibrinogen human and thrombin human"
	},
	{
		"id": 111,
		"drug_company": "Ricola Ag",
		"drug_name": "DUAL ACTION CHERRY COUGH SUPPRESSANT ORAL ANESTHETIC",
		"drug_name_generic": "MENTHOL"
	},
	{
		"id": 112,
		"drug_company": "SHISEIDO AMERICA INC.",
		"drug_name": "SHISEIDO RADIANT LIFTING FOUNDATION",
		"drug_name_generic": "OCTINOXATE and TITANIUM DIOXIDE"
	},
	{
		"id": 113,
		"drug_company": "General Injectables & Vaccines, Inc",
		"drug_name": "Xylocaine",
		"drug_name_generic": "Lidocaine Hydrochloride and Epinephrine"
	},
	{
		"id": 114,
		"drug_company": "Quality Home Products",
		"drug_name": "Premier Value day time severe cold and cough",
		"drug_name_generic": "Acetaminophen, Dextromethorphan HBr, and Phenylephrine HCL."
	},
	{
		"id": 115,
		"drug_company": "Biogen Idec Inc.",
		"drug_name": "Tecfidera",
		"drug_name_generic": "dimethyl fumarate"
	},
	{
		"id": 116,
		"drug_company": "Mckesson Corporation",
		"drug_name": "Sunmark Enema",
		"drug_name_generic": "Mineral Oil"
	},
	{
		"id": 117,
		"drug_company": "BJWC",
		"drug_name": "berkley and jensen migraine formula",
		"drug_name_generic": "Acetaminophen, Aspirin, Caffeine"
	},
	{
		"id": 118,
		"drug_company": "Kmart Corporation",
		"drug_name": "Smart Sense Complete",
		"drug_name_generic": "famotidine, calcium carbonate and magnesium hydroxide"
	},
	{
		"id": 119,
		"drug_company": "A-S Medication Solutions LLC",
		"drug_name": "Chlordiazepoxide Hydrochloride And Clidinium Bromide",
		"drug_name_generic": "CHLORDIAZEPOXIDE HYDROCHLORIDE, CLIDINIUM BROMIDE"
	},
	{
		"id": 120,
		"drug_company": "Accord Healthcare Inc.",
		"drug_name": "Mycophenolate Mofetil",
		"drug_name_generic": "Mycophenolate Mofetil"
	},
	{
		"id": 121,
		"drug_company": "Par Pharmaceutical, Inc.",
		"drug_name": "Propafenone Hydrochloride",
		"drug_name_generic": "propafenone hydrochloride"
	},
	{
		"id": 122,
		"drug_company": "REMEDYREPACK INC.",
		"drug_name": "Diclofenac Sodium Delayed Release",
		"drug_name_generic": "Diclofenac Sodium"
	},
	{
		"id": 123,
		"drug_company": "Medsource Pharmaceuticals",
		"drug_name": "Omeprazole",
		"drug_name_generic": "Omeprazole"
	},
	{
		"id": 124,
		"drug_company": "Roxane Laboratories, Inc.",
		"drug_name": "oxycodone hydrochloride",
		"drug_name_generic": "oxycodone hydrochloride"
	},
	{
		"id": 125,
		"drug_company": "KAISER FOUNDATION HOSPITALS",
		"drug_name": "Butalbital, Acetaminophen and Caffeine",
		"drug_name_generic": "Butalbital, Acetaminophen, and Caffeine"
	},
	{
		"id": 126,
		"drug_company": "Major Pharmaceuticals",
		"drug_name": "Bethanechol Chloride",
		"drug_name_generic": "Bethanechol Chloride"
	},
	{
		"id": 127,
		"drug_company": "Bryant Ranch Prepack",
		"drug_name": "Allopurinol",
		"drug_name_generic": "Allopurinol"
	},
	{
		"id": 128,
		"drug_company": "Ranbaxy Pharmaceuticals Inc.",
		"drug_name": "Pioglitazone",
		"drug_name_generic": "pioglitazone"
	},
	{
		"id": 129,
		"drug_company": "E-Z-EM Canada Inc",
		"drug_name": "Readi-Cat2",
		"drug_name_generic": "Barium Sulfate"
	},
	{
		"id": 130,
		"drug_company": "Apotheca Company",
		"drug_name": "Mold Mix Antigens",
		"drug_name_generic": "Arsenicum album, Phosphorus, Pulsatilla, Sepia, Alternaria tenuis, Aspergillus niger, Rhizopus nigricans,"
	},
	{
		"id": 131,
		"drug_company": "Teva Parenteral Medicines, Inc.",
		"drug_name": "Leuprolide Acetate",
		"drug_name_generic": "Leuprolide Acetate"
	},
	{
		"id": 132,
		"drug_company": "Merck Sharp & Dohme Corp.",
		"drug_name": "BELSOMRA",
		"drug_name_generic": "suvorexant"
	},
	{
		"id": 133,
		"drug_company": "Baxter Healthcare Corporation",
		"drug_name": "Transderm Scop",
		"drug_name_generic": "Scopalamine"
	},
	{
		"id": 134,
		"drug_company": "CSL Behring LLC",
		"drug_name": "Monoclate-P",
		"drug_name_generic": "ANTIHEMOPHILIC FACTOR HUMAN"
	},
	{
		"id": 135,
		"drug_company": "Actavis Elizabeth LLC",
		"drug_name": "Isosorbide Mononitrate",
		"drug_name_generic": "Isosorbide Mononitrate"
	},
	{
		"id": 136,
		"drug_company": "Actavis South Atlantic LLC",
		"drug_name": "Bupropion Hydrochloride",
		"drug_name_generic": "Bupropion Hydrochloride"
	},
	{
		"id": 137,
		"drug_company": "Deb USA, Inc.",
		"drug_name": "Deb Antimicrobial Fragrance and Dye Free",
		"drug_name_generic": "Triclosan"
	},
	{
		"id": 138,
		"drug_company": "Actavis Elizabeth LLC",
		"drug_name": "Pilocarpine hydrochloride",
		"drug_name_generic": "Pilocarpine hydrochloride"
	},
	{
		"id": 139,
		"drug_company": "Curazene, LLC",
		"drug_name": "Baclezene",
		"drug_name_generic": "Neomycin Sulfate"
	},
	{
		"id": 140,
		"drug_company": "Natural Health Supply",
		"drug_name": "SORE THROAT",
		"drug_name_generic": "VIROLA SEBIFERA RESIN"
	},
	{
		"id": 141,
		"drug_company": "PD-Rx Pharmaceuticals, Inc.",
		"drug_name": "Glipizide",
		"drug_name_generic": "Glipizide"
	},
	{
		"id": 142,
		"drug_company": "Roerig",
		"drug_name": "Vistaril",
		"drug_name_generic": "hydroxyzine hydrochloride"
	},
	{
		"id": 143,
		"drug_company": "Hospira, Inc.",
		"drug_name": "Meropenem",
		"drug_name_generic": "MEROPENEM"
	},
	{
		"id": 144,
		"drug_company": "Guthy-Renker LLC",
		"drug_name": "Proactiv Clear Zone Body Pads",
		"drug_name_generic": "SALICYLIC ACID"
	},
	{
		"id": 145,
		"drug_company": "Amerisource Bergen",
		"drug_name": "good neighbor pharmacy ibuprofen",
		"drug_name_generic": "Ibuprofen"
	},
	{
		"id": 146,
		"drug_company": "Kao Brands Company",
		"drug_name": "Ban",
		"drug_name_generic": "Aluminum Chlorohydrate"
	},
	{
		"id": 147,
		"drug_company": "Cardinal Health",
		"drug_name": "Calcium Chloride",
		"drug_name_generic": "CALCIUM CHLORIDE"
	},
	{
		"id": 148,
		"drug_company": "Amneal Pharmaceuticals of New York, LLC",
		"drug_name": "Extended Phenytoin Sodium",
		"drug_name_generic": "Phenytoin Sodium"
	},
	{
		"id": 149,
		"drug_company": "Cramer Products Inc",
		"drug_name": "Cramergesic",
		"drug_name_generic": "menthol, methyl salicylate"
	},
	{
		"id": 150,
		"drug_company": "Aurobindo Pharma Limited",
		"drug_name": "Zidovudine",
		"drug_name_generic": "Zidovudine"
	},
	{
		"id": 151,
		"drug_company": "Melaleuca, Inc.",
		"drug_name": "DermaCort",
		"drug_name_generic": "Hydrocortisone"
	},
	{
		"id": 152,
		"drug_company": "Walgreen Company",
		"drug_name": "daytime nighttime cold and flu",
		"drug_name_generic": "Acetaminophen, Dextromethorphan HBr, Doxylamine succinate, Phenylephrine HCl"
	},
	{
		"id": 153,
		"drug_company": "Greenbrier International, Inc.",
		"drug_name": "Assured Instant Hand Sanitizer with Moisturizers Vitamin E and Aloe",
		"drug_name_generic": "ALCOHOL"
	},
	{
		"id": 154,
		"drug_company": "Unifirst First Aid Corporation",
		"drug_name": "Medi First Plus Sinus Pain and Pressure",
		"drug_name_generic": "ACETAMINOPHEN, PHENYLEPHRINE HYDROCHLORIDE"
	},
	{
		"id": 155,
		"drug_company": "Greenbrier International",
		"drug_name": "ANTIBACTERIAL BANDAGE",
		"drug_name_generic": "benzalkonium chloride"
	},
	{
		"id": 156,
		"drug_company": "Innovus Pharmaceuticals, Inc.",
		"drug_name": "EJECTDELAY",
		"drug_name_generic": "Benzocaine 7.5%"
	},
	{
		"id": 157,
		"drug_company": "Premier Value (Chain Drug Consortium, LLC)",
		"drug_name": "Motion Sickness",
		"drug_name_generic": "DIMENHYDRINATE"
	},
	{
		"id": 158,
		"drug_company": "GlaxoSmithKline Consumer Heathcare LP",
		"drug_name": "TUMS",
		"drug_name_generic": "calcium carbonate"
	},
	{
		"id": 159,
		"drug_company": "Life Line Home Care Services, Inc.",
		"drug_name": "Doxycycline Hyclate",
		"drug_name_generic": "Doxycycline Hyclate"
	},
	{
		"id": 160,
		"drug_company": "King Bio Inc.",
		"drug_name": "Indecision",
		"drug_name_generic": "Chamomilla, Clematis vitalba, flos, Croton tiglium, Curare, Dulcamara, Graphites, Ignatia amara, Iodium, Lathyrus sativus, Lonicera caprifolium, flos, Millefolium, Muriaticum acidum, Rosa damascena, Saccharum officinale, Silicea, Stigmata maidis"
	},
	{
		"id": 161,
		"drug_company": "Mckesson",
		"drug_name": "HealthMart Mucus Relief FM",
		"drug_name_generic": "Acetaminophen, dextromethorphan HBr, guaifenesin, Phenylephrine HCl"
	},
	{
		"id": 162,
		"drug_company": "ALK-Abello, Inc.",
		"drug_name": "FAGUS GRANDIFOLIA POLLEN",
		"drug_name_generic": "Beech"
	},
	{
		"id": 163,
		"drug_company": "Cipla Limited",
		"drug_name": "Topiramate",
		"drug_name_generic": "Topiramate"
	},
	{
		"id": 164,
		"drug_company": "Schwarz Pharma Inc.",
		"drug_name": "Niravam",
		"drug_name_generic": "alprazolam"
	},
	{
		"id": 165,
		"drug_company": "Babor Cosmetics America, Corp.",
		"drug_name": "Dr. Babor Purity Cellular Ultimate Blemish Reducing Duo",
		"drug_name_generic": "Salicylic Acid, Zinc Oxide"
	},
	{
		"id": 166,
		"drug_company": "Neutrogena Corporation",
		"drug_name": "Neutrogena Oil Free Acne Wash",
		"drug_name_generic": "Salicylic Acid"
	},
	{
		"id": 167,
		"drug_company": "Cardinal Health",
		"drug_name": "Ethyl Rubbing Alcohol",
		"drug_name_generic": "Isopropyl Alcohol"
	},
	{
		"id": 168,
		"drug_company": "Forest Laboratories, Inc.",
		"drug_name": "Lexapro",
		"drug_name_generic": "ESCITALOPRAM OXALATE"
	},
	{
		"id": 169,
		"drug_company": "Vitality Works, Inc.",
		"drug_name": "Brain Supp",
		"drug_name_generic": "Brain Support"
	},
	{
		"id": 170,
		"drug_company": "PD-Rx Pharmaceuticals, Inc.",
		"drug_name": "Promethazine Hydrochloride",
		"drug_name_generic": "Promethazine Hydrochloride"
	},
	{
		"id": 171,
		"drug_company": "SHISEIDO CO., LTD.",
		"drug_name": "SHISEIDO ADVANCED HYDRO-LIQUID COMPACT (REFILL)",
		"drug_name_generic": "Titanium dioxide"
	},
	{
		"id": 172,
		"drug_company": "Fresenius Kabi USA, LLC",
		"drug_name": "Doxy 100",
		"drug_name_generic": "DOXYCYCLINE"
	},
	{
		"id": 173,
		"drug_company": "Gensavis Pharmaceuticals, LLC",
		"drug_name": "NovaFerrum",
		"drug_name_generic": "Polysacchride Iron Vitamin Mineral Complex"
	},
	{
		"id": 174,
		"drug_company": "REMEDYREPACK INC.",
		"drug_name": "Lisinopril",
		"drug_name_generic": "Lisinopril"
	},
	{
		"id": 175,
		"drug_company": "Publix Super Markets Inc",
		"drug_name": "Maximum Strength",
		"drug_name_generic": "Aluminum Hydroxide, Magnesium Hydroxide, Simethicone"
	},
	{
		"id": 176,
		"drug_company": "Nelco Laboratories, Inc.",
		"drug_name": "Dandelion",
		"drug_name_generic": "Dandelion"
	},
	{
		"id": 177,
		"drug_company": "AuroMedics Pharma LLC",
		"drug_name": "Acyclovir Sodium",
		"drug_name_generic": "Acyclovir Sodium"
	},
	{
		"id": 178,
		"drug_company": "Moore Medical LLC",
		"drug_name": "Moore Medical Extra Strength Non Aspirin",
		"drug_name_generic": "Acetaminophen"
	},
	{
		"id": 179,
		"drug_company": "Dispensing Solutions, Inc.",
		"drug_name": "Zyprexa",
		"drug_name_generic": "Olanzapine"
	},
	{
		"id": 180,
		"drug_company": "Actavis South Atlantic LLC",
		"drug_name": "Bupropion Hydrochloride",
		"drug_name_generic": "Bupropion Hydrochloride"
	},
	{
		"id": 181,
		"drug_company": "CLINIQUE LABORATORIES INC",
		"drug_name": "ACNE SOLUTIONS LIQUID MAKEUP",
		"drug_name_generic": "SALICYLIC ACID"
	},
	{
		"id": 182,
		"drug_company": "NCS HealthCare of KY, Inc dba Vangard Labs",
		"drug_name": "Naproxen",
		"drug_name_generic": "Naproxen"
	},
	{
		"id": 183,
		"drug_company": "Alston Garrard & Co",
		"drug_name": "Liqufruta",
		"drug_name_generic": "GUAIFENESIN"
	},
	{
		"id": 184,
		"drug_company": "Shasun Pharmaceuticals Limited",
		"drug_name": "Ibuprofen",
		"drug_name_generic": "Ibuprofen"
	},
	{
		"id": 185,
		"drug_company": "Warner Chilcott (US), LLC",
		"drug_name": "Minastrin 24 Fe",
		"drug_name_generic": "norethindrone acetate and ethinyl estradiol chewable tablets and ferrous fumarate tablets"
	},
	{
		"id": 186,
		"drug_company": "Allergy Laboratories, Inc.",
		"drug_name": "WESTERN COTTONWOOD POLLEN",
		"drug_name_generic": "populus deltoides subsp. monilifera pollen"
	},
	{
		"id": 187,
		"drug_company": "Sun Products Corporation",
		"drug_name": "Home Sense Ultra Green Apple Scent",
		"drug_name_generic": "Triclosan"
	},
	{
		"id": 188,
		"drug_company": "Aidarex Pharmaceuticals LLC",
		"drug_name": "SENEXON-S",
		"drug_name_generic": "DOCUSATE SODIUM -SENNOSIDES"
	},
	{
		"id": 189,
		"drug_company": "Home Sweet Homeopathics",
		"drug_name": "PPH Prevention",
		"drug_name_generic": "Arnica, Bellis"
	},
	{
		"id": 190,
		"drug_company": "Eight and Company",
		"drug_name": "Sprayology MenoPower",
		"drug_name_generic": "Arnica montana, Glonoinum, Lachesis mutus, Oophorinum, Salvia officinalis, Sanguinaria canadensis, Sepia"
	},
	{
		"id": 191,
		"drug_company": "Aphena Pharma Solutions - Tennessee, LLC",
		"drug_name": "Omeprazole",
		"drug_name_generic": "omeprazole"
	},
	{
		"id": 192,
		"drug_company": "Physicians Total Care, Inc.",
		"drug_name": "Hydrocortisone",
		"drug_name_generic": "Hydrocortisone"
	},
	{
		"id": 193,
		"drug_company": "McKesson",
		"drug_name": "Sunmark acid reducer",
		"drug_name_generic": "Ranitidine"
	},
	{
		"id": 194,
		"drug_company": "Walgreen Company",
		"drug_name": "Studio35 Extra Strength Medicated Body",
		"drug_name_generic": "Dimethicone and Menthol"
	},
	{
		"id": 195,
		"drug_company": "Enzyme Solutions, Inc.",
		"drug_name": "Servo-Stat T",
		"drug_name_generic": "Triclosan"
	},
	{
		"id": 196,
		"drug_company": "LaCorium Health International Pty Ltd",
		"drug_name": "natralia",
		"drug_name_generic": "SILICON DIOXIDE and SODIUM CHLORIDE"
	},
	{
		"id": 197,
		"drug_company": "Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC",
		"drug_name": "Bacitracin",
		"drug_name_generic": "Bacitracin"
	},
	{
		"id": 198,
		"drug_company": "CVS Pharmacy",
		"drug_name": "anti diarrheal",
		"drug_name_generic": "Loperamide Hydrochloride"
	},
	{
		"id": 199,
		"drug_company": "Air Liquide Healthcare America Corporation",
		"drug_name": "OXYGEN",
		"drug_name_generic": "OXYGEN"
	},
	{
		"id": 200,
		"drug_company": "Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC",
		"drug_name": "Hydrocortisone",
		"drug_name_generic": "Hydrocortisone"
	}
]

},{}],3:[function(require,module,exports){
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

},{"./controller/drugs.js":1}]},{},[3]);
