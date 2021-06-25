<script>
    import Fa from 'svelte-fa'
    import {faDice, faChevronDown} from '@fortawesome/free-solid-svg-icons';
    import Button from './Button.svelte';
    import InputWithDropdown from './InputWithDropdown.svelte';
    import axios from 'axios';

    let gradeForm; // current value of the grade input
    let subjectForm; // current value of the subject input

    

    // this is exposed to the parent
    export let results;
    let buttonState = "prequery";
    $: if(gradeForm && subjectForm && checkPair(gradeForm, subjectForm)) {
        buttonState = "ready";
    } else if(!checkPair(gradeForm, subjectForm) && gradeForm && subjectForm) {
        buttonState = "invalid-pair"
    } else {
        buttonState = "prequery";
    }

    let go = function (g, s) {
        if(buttonState == "ready") {
            results = null;
            buttonState = "spinner";
            axios.get('https://standards-api.herokuapp.com/api/v1.0/standards/get-pair', {
                params: {
                    grade: gradeForm,
                    subject: subjectForm
                }
            })
            .then(function (res) {
                console.log(res.data);
                results = res["data"];
                buttonState = "ready"
            } ).catch(function(e) {
                console.log(e);
                buttonState = "error";
            })
        } else {
            buttonState = "error";
            setTimeout(function () {
                buttonState = "prequery";
            }, 1000);
        }
        
    }

    let grades = []; // result of API call
    let subjects = []; // result of API call
    // Get grade info from database
    axios.get('https://standards-api.herokuapp.com/api/v1.0/grades')
    .then(function (res) {
        console.log(res["data"]);
        // compile grade levels from response
        grades = res["data"];
    })
    .catch(function (error) {
        console.log(error);
    })

    // Get subject info from database
    axios.get('https://standards-api.herokuapp.com/api/v1.0/subjects')
    .then(function (res) {
        console.log(res["data"]);
        // compile grade levels from response
        subjects = res["data"];
    })
    .catch(function (error) {
        console.log(error);
    })

    // Validate form inputs against one another
    function checkPair(grade, subject) {
        if(grades && grade && subject) {
            if(grades[grade].includes(subject)) {
                return true;
            }
        }
        return false;
    } 
    
</script>

<div>
    <div class='columns has-text-centered'>
        <div class='column'>
            <!-- Grades -->
            <InputWithDropdown 
                bind:validInput={gradeForm} 
                title="Grade" 
                addons='has-addons has-addons-right' 
                list={grades["all_grades"]}
                validate={grades}
            />
        </div>
        <div class='column'>
            <!-- Subjects -->
            <InputWithDropdown 
                bind:validInput={subjectForm} 
                title="Subject" 
                addons='has-addons has-addons-left' 
                list={subjects["all_subjects"]} 
                validate={subjects} 
            />
        </div>
    </div>
    <div class='field'>
        <!-- <button on:click={() => go(gradeForm, subjectForm)} class='button is-primary is-rounded'>Get a Random Pair of Standards!</button> -->
        <Button action={() => go(gradeForm, subjectForm)} state={buttonState} />
    </div>
</div>
