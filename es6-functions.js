// ASYNC AWAIT function
// -----------------------------------------------------------------------------------------------------

    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'; 
    fetch(url)
    .then(response => response.json())
    .then(
      commits => console.log(commits[0].author.login)
    );

    async function munna(){
      let response = await fetch(url);
      let commits = await response.json(); // read response body and parse as JSON
      console.log(commits[0].author);
    }
    
    // asyn on fat arrow
    const munna = async () => {
      let response = await fetch(url);
      let commits = await response.json(); // read response body and parse as JSON
      console.log(commits[0].author);
    }
    
    munna();
    
    
    
// Promise
// -----------------------------------------------------------------------------------------------------
