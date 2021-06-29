let messageComponents = {
    subject: ["You", "Your dad", "Your mum", "Your partner"],
    verb: ["will", "will not", "should", "should not", "may", "must", "must not"],
    ending: ["enter the mangrove.", "find love among the stars.", "rejoin Satan´s mission.", 
    "make peace with Saruman."]
};


const messageGenerator = () => {
    let subjectLength = messageComponents.subject.length;
    let verbLength = messageComponents.verb.length;
    let endingLength = messageComponents.ending.length;



    let subjectIndex = Math.floor(Math.random() * subjectLength);
    let verbIndex = Math.floor(Math.random() * verbLength);
    let endingIndex = Math.floor(Math.random() * endingLength);


    let randomMessage = messageComponents.subject[subjectIndex] + " " +  messageComponents.verb[verbIndex] + " " + messageComponents.ending[endingIndex];
    return randomMessage;
    
};

messageGenerator()



