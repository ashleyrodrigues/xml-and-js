/**
 * Function to get array of all states.
 * - with no duplicates
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */
const getAllStates = (data) => {
	return new Promise((resolve) => {
		let states = data.map(getStates);
        const arrayy = [...new Set(states)];
		resolve(arrayy)
	})
    };

function getStates(data) {
    return  data.address[0].state;
    }

module.exports = getAllStates;