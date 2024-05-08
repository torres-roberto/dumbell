function addExercise() {
    // Get the input values
    var exercise = document.getElementById('exercise').value;
    var weight = document.getElementById('weight').value;
    var reps = document.getElementById('reps').value;

    // Do something with the values
    console.log('Exercise: ' + exercise);
    console.log('Weight: ' + weight);
    console.log('Reps: ' + reps);

    // Create an object to store the exercise set
    var exerciseSet = {
        exercise: exercise,
        weight: weight,
        reps: reps
    };

    // Retrieve the stored exercise sets from session storage
    var storedExerciseSets = sessionStorage.getItem('exerciseSets');
    var exerciseSets = null;

    // Check if there are any stored exercise sets
    if (storedExerciseSets == null) {
        // If no exercise sets are stored, create a new array with the current exercise set
        exerciseSets = JSON.stringify([exerciseSet]);
    } else {
        // If exercise sets are already stored, parse the JSON string and add the current exercise set
        exerciseSets = JSON.parse(storedExerciseSets);
        exerciseSets.push(exerciseSet);
        exerciseSets = JSON.stringify(exerciseSets);        
    }

    // Store the updated exercise sets in session storage
    sessionStorage.setItem('exerciseSets', exerciseSets);
}