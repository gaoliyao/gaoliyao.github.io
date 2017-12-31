# Year 2017

## MessageOnTap
<img src="https://github.com/gaoliyao/gaoliyao.github.io/blob/master/MOT.png" width="48">


One of the most important work for me in 2017 is MessageOnTap. MessageOnTap is an intelligent agent for instant messaging application through the length of personal data. People spend most of their time on Messaging Applications when using smartphones. As an important port of communication, messaging applications exchange a lot of information. Sometimes, people might need to store or retrieve information using other services on smartphones, such as photos or calendar. Users, often times, need to be the glue that connects di erent apps together.[1] However, the smartphones actually do able to get all of the information. This will not only save time for the user, but also increase the capability of smartphones. We were trying to combine personal data with cooresponding opeartions on smartphones. 


I first heard about the idea in 2016 from [Fanglin Chen](http://fanglin-chen.strikingly.com/), a PhD student in Carnegie Mellon University. His instructor is [Jason Hong](http://www.cs.cmu.edu/~jasonh/). At the very beginning, Fanglin introduced me with the idea of MessageOnTap with a series of scnarios (23 as I remembered). The architecture used to be a mess. After a long discussion and prototypes of some scnarios, we finally were able to find the basic architecture. NLP -> SQL -> UI. It is the first time for us to clearify the logical sequence. We implemented some utils for personal data analyze and natural language processing which includes TimeParser and LocationClustering. TimeParser and LocationClustering described two interesting algorithm to solve problem of understanding time in a sentence and understanding user's visited place list with coordinates data.


Four months later, I went back to CMU once again. Learned from the NLP technique of Search Engine, I tried to analyze the questions and identify the sentence's keywords. Then I tried to implement the whole architecture. The first essential problem was getting the keyword of the sentence. At that time, Trump and Hillary was on the same weight. I tried to use the test case, "Will you vote for Hillary". As Fanglin told me, I tried to combine the stanford post-tagger and open knowledge base to do keyword understanding. Without using deep learning methods, I tried to catch the keyword then using open knowledge base to map the category, to perform the Named Entity Recognition. Then we worked so much on understanding the user with personal data. This shuold be our main contribution to the community. The AI should be able to understand human beings but currently, the whole community ignored it. So we implemented SemanticLocationClustering to let the smartphone understand user's semantic location, such as 'home' or 'office'. Our approach can link the semantic location with real coordinates. (I worked a lot on it last year when passing the new year from 2016 to 2017. I wandered on the empty street in Pittsburgh. We played Majong that day and my friend was ill. We visited ER.)

