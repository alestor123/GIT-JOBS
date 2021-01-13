#!/usr/bin/env node
var jobs = require('./App'),
chalk = require('chalk');
(async () => {
var data = await jobs(process.argv[2],process.argv[3])
data.map(jobs => console.log('\n' + chalk.bold.cyanBright(jobs.title)+'💻'+chalk.greenBright('\n Job Type : ') + chalk.yellowBright(jobs.type)
+ chalk.greenBright('\n Published : ')+chalk.yellowBright(jobs.posted) + chalk.greenBright('\n Company : ')+chalk.yellowBright(jobs.company)
+ chalk.greenBright('\n Company Url : ')+chalk.yellowBright(jobs.companyurl)+ chalk.greenBright('\n Location : ')+chalk.yellowBright(jobs.location)
+ chalk.greenBright('\n Apply : ')+chalk.yellowBright(jobs.apply)+ chalk.greenBright(' More Details : ')+chalk.yellowBright('https://jobs.github.com/positions/'+jobs.id)
)
)})();
