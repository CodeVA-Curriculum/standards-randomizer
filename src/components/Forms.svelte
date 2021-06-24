<script>
    import Fa from 'svelte-fa'
    import {faDice, faChevronDown} from '@fortawesome/free-solid-svg-icons';
    import Button from './Button.svelte';
    import InputWithDropdown from './InputWithDropdown.svelte';
    import axios from 'axios';
    let grades = ["Kindergarten"];
    let subjects = ["Science", "Health"];

    let gradeForm;
    let subjectForm;

    // this is exposed to the parent
    export let results;
    let buttonState = "prequery";
    $: if(gradeForm && subjectForm) {
        buttonState = "ready";
    } else {
        buttonState = "prequery";
    }
    // Requests
    // TODO: make this request work properly
    // TODO: Validate input
    let go = function (g, s) {
        results = null;
        buttonState = "spinner";
        setTimeout(function () {
            results = {
                cs: "CS.1",
                nonCs: "SC.3"
            }
            buttonState = "ready"
        }, 750);
        // axios.get(url).then(function (res) {
        //     console.log(res.data);
        //     results = res;
        // } ).catch(function(e) {
        //     console.log(e);
        // })
    }
    // get database info to help with matching random pairs
    // get all CS grades
    // Optionally the request above could also be done as
    // axios.get('https://standards-api.herokuapp.com/api/v1.0/grades')
    // .then(function (res) {
    //     console.log(res["data"]);
    //     // compile grade levels from response
    //     grades = res["data"]["all_grades"];

    //     // compile subject areas from response
    //     for(let i=0; i<grades.length; i++) {
    //         for(let v=0; v<res["data"][grades[i]].length; v++) {
    //             if(!subjects.includes(res["data"][grades[i]][v])) {
    //                 subjects.push(res["data"][grades[i]][v]);
    //             }
    //         }
    //     }
    //     console.log("Grades: ", grades);
    //     console.log("Subjects: ", subjects);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })
    

</script>

<div>
    <div class='columns has-text-centered'>
        <div class='column'>
            <!-- Grades -->
            <InputWithDropdown bind:validInput={gradeForm} title="Grade" addons='has-addons has-addons-right' contents={grades} />
        </div>
        <div class='column'>
            <!-- Subjects -->
            <InputWithDropdown bind:validInput={subjectForm} title="Subject" addons='has-addons has-addons-left' contents={subjects} />
        </div>
    </div>
    <div class='field section'>
        <!-- <button on:click={() => go(gradeForm, subjectForm)} class='button is-primary is-rounded'>Get a Random Pair of Standards!</button> -->
        <Button action={() => go(gradeForm, subjectForm)} state={buttonState} />
    </div>
</div>
