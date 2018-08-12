//get name of file
var filename = './' + process.argv[2];

//get command
var cmd = process.argv[3];

//get argument
var arg = process.argv[4];

//get data
var data = require(filename);

console.log("Company Names:")
var count = 0;

//Locate function
if (cmd === "locate") {
    //filter data with location of input
    data = data.filter(company => company.state === arg).map((company) => {
        count++;
        return(company.company_name);
    }).join(", ");
}

//find before & find_after function
else if (cmd === "find_before" || cmd === "find_after") {
    //filter data with year founded before inclusive argument
    data = data.filter((company) => {
        if (cmd === "find_before") {
            return company.year_founded <= arg;
        } else {
            return company.year_founded >= arg;
        }
        }).map((company) => {
            count++;
            return(company.company_name);
        }).join(", ");
}

//find companies between size
else if (cmd === "find_companies_between_size") {
    data = data.filter(company => company.full_time_employees === arg).map((company) => {
        count++;
        return(company.company_name);
    }).join(", ");
}

//find comapnies of category equal to argument
else if (cmd === "find_type") {
    data = data.filter(company => company.company_category === arg).map((company) => {
        count++;
        return(company.company_name);
    }).join(", ");
}

console.log(data);

console.log("\nNumber of Companies: " + count);