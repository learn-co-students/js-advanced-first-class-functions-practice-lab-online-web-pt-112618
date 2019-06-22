let logDriverNames = function(drivers) {
	drivers.forEach(function(driver) {
		console.log(driver.name)
	});
};

let logDriversByHometown = function(drivers, hometown) {
	drivers.forEach(function(driver) {
		if driver.hometown === hometown {
			console.log(driver.name)
		}
	})
}