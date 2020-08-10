		
		var i;
        var treatment_info = "Bellow the best result is displayed of your search based on our database (Or closest match of your search): <br><br>"; 
        var treatment_result = [{

            "name": "#1: Psychological treatment",
            "reviews": "Range you specify between: 21 - 65, based on a total of 196 reviews.",
            "ranking": "Ranking: 1",
            "description": "Psychological treatment of a pain patient is based on cognitive-behavioral methods that aim to improve the patient’s overall holistic approach; especially psychosocial functioning and self-care grip. KBT therapy helps the patient to calm and stabilize their cognitive-emotional and psychophysical pain experience. KBT aims to help patients also build their identity in a new way, accept the changed situation and grow into the subject of their problems."
        }, {
            "name": "#2: Alexander Technique to change your own ways of doing business in a more present and freer direction",
            "reviews": "Range you specify between: 28 - 82, based on a total of 65 reviews.",
            "ranking": "Ranking: 2",
            "description": "Alexander technology can be used to learn to be and act more freely and present. For the most common chronic low back pain, it has been found in an extensive study to provide long-term relief from pain by significantly reducing the number of pain days and improving functional capacity. On follow-up, it gave better results than massage, exercise counseling, or a regular doctor’s appointment. The limiting factor is that learning it requires personal guidance, but the study has already had an effect on six occasions, especially when combined with an exercise prescription. Google: 'Randomized controlled trial of Alexander technique Lessons - BMJ' or 'The potential of Alexander technique in rehabilitation thesis'."
        }, {
            "name": "#3: Thorough Biopsychosocial Assessment",
            "reviews": "Range you specify between: 11 - 53, based on a total of 194 reviews.",
            "ranking": "Ranking: 3",
            "description": "Familiarization with the pathology, prognosis and causes of low back pain from a biopsychosocial point of view. Multi-professional correction of the patient's dysfunction and incorrect lifestyle, if necessary. Motivation for independent practice.",
        }, {
            "name": "#4: Illustrating the cause of the pain",
            "reviews": "Range you specify between: 32 - 45, based on a total of 186 reviews.",
            "ranking": "Ranking: 4",
            "description": "For example, looking for a painful movement or, on the other hand, looking for a facilitative exercise together with the patient can teach the patient to study his or her own actions. The same model of logical reasoning can also be implemented in assessing the effect of drugs; the patient can keep a diary in which he observes the matter to be clarified. Experiences and observations can be used to motivate the patient. Cognitive tools are often too theoretical and far from practical ... a psychologist may observe a patient too much from a psychological perspective."  
        }, {
            "name": "#5: Pilates",
            "reviews": "Range you specify between: 19 - 95, based on 122 reviews.",
             "ranking": "Ranking: 5",
            "description": "Works better in pain management than painkillers." 
        }];

        for (i = 0; i < treatment_result.length; i++) {
          
            treatment_info += treatment_result[i].name + "<br>" + treatment_result[i].reviews + "<br>" + treatment_result[i].ranking + "<br>" 
            + treatment_result[i].description  +  "<br><p>*******************</p>";
        }

        function displayInfo() {
            document.getElementById("desire-result-display").innerHTML = treatment_info;
        }

       
       	function show_hide_button() {
	   		document.getElementById("hide-desire-result").style.display = "block";
	   	}


	   	$( "form" ).submit(function( event ) {
  			console.log( $( this ).serializeArray() );
  			event.preventDefault();
		});


			
