// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if(driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  const newDrivers = [...drivers]
  newDrivers.sort(function(a, b) {
    return a.revenue - b.revenue
  })
  return newDrivers;
}

function driversByName(drivers) {
  const newDrivers = [...drivers]
  newDrivers.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  })
  return newDrivers;
}

function totalRevenue(drivers) {
  let total = 0;
  drivers.forEach(function(driver) {
    return total += driver.revenue
  })
  return total;
}


function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
