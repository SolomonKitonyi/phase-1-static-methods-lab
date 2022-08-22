class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1)
  }
  static sanitize (myString) {
    return myString.replace(/[^\w\s-']/gi, '')
  }
  static titleize(str) {
    const smallWords = /^(a|an|and|as|at|but|by|for|from|if|in|of|on|or|the|to|vs?\.?|via)$/i;
   let ans = str.split(" ").map(item => {
      return !smallWords.test(item) ? item.charAt(0).toUpperCase() + item.substring(1) : item.toLowerCase()
    })
    let ans1 = ans.join(" ")
    return ans1.charAt(0).toUpperCase() + ans1.substring(1);
  }
}