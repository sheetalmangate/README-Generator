
function generateQuestions() {
    
    const questions = [
        {
            type : 'input',
            message : 'What is you project name?',
            name : 'title',
        },
        {
            type : 'text',
            message : 'Enter Short Description about your project',
            name : 'desc',
        },
        {
            type : 'input',
            message : 'What steps need to be follow to setup the project',
            name : 'installation',
        },
        {
            type : 'input',
            message : 'Enter short description about features of system ',
            name : 'usage',
        },
        {
            type : 'input',
            message : 'Enter Contribution Guidelines',
            name : 'contribution',
        },
        {
            type : 'input',
            message : 'Enter Test details you followd for testing',
            name : 'test',
        },
        {
            type : 'list',
            message : 'Select License ',
            name : 'license',
            choices : ['MIT','GNU GPL v2','GNU GPL v3','Apache 2.0 License','None'],
        },
        {
            type : 'input',
            message : 'Enter your email',
            name : 'email',
        },
        {
            type : 'input',
            message : 'Enter your GitHub username',
            name : 'github',
        },
        

        
    ];

    return questions;
}

export default generateQuestions;