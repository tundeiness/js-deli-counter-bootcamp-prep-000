var katzDeliLine = [];

function takeANumber(katzDeliLine, customer){
          katzDeliLine.push(customer);
          return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`;
}





function nowServing(katzDeliLine){
  
     if(katzDeliLine.length > 0){
    	return `Currently serving ${katzDeliLine.shift()}.`;
    } else {
    	return `There is nobody waiting to be served!`;
      }
}


