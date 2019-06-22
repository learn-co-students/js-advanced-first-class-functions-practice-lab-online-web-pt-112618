let logDriverNames = function(drivers) {
	drivers.forEach(function(driver) {
		console.log(driver.name)
	});
};

let logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

let driversByRevenue = function(drivers) {
	return drivers.slice().sort( function(d1, d2) {
		return d1.revenue - d2.revenue
	});
};

let driversByName = function(drivers) {
	return drivers.slice().sort(function(d1, d2){
		return d1.name.localeCompare(d2.name)
	});
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};