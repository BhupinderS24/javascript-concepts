const non_repeat_substring = function(str) {
  // TODO: Write your code here
  let windowStart=0;
  var map={};
  let maxLength=0;

  for(let windowEnd=0;windowEnd<str.length;windowEnd++){
    if(!map.hasOwnProperty(str[windowEnd])){
      map[str[windowEnd]]=1;
    }
    else{
      windowStart=windowEnd;
      map={};
    }
    console.log(map);
    maxLength=Math.max(maxLength,windowEnd-windowStart+1);
  }
  return maxLength;
};


console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);