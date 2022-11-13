let promptt = prompt("Enter any number from 1 to 10", "2");
let num = parseInt(promptt);

switch(num >= 1 && num <= 10 && Number.isFinite(num)) {
    case true:
        switch(num) {
            case 1:
                alert('Back to square 1');
            break;
            case 2:
                alert('Goody 2-shoes');
            break;
            case 3:
                alert("Two's company, three's a crowd");
            break;
            case 4:
                alert('Counting sheep');
            break;
            case 5:
                alert('Take five');
            break;
            case 6:
                alert("Two's company, three's a crowd");
            break;
            case 7:
                alert('Seventh heaven');
            break;
            case 8:
                alert('Behind the eight-ball');
            break;
            case 9:
                alert('Counting sheep');
            break;
            case 10:
                alert('Cheaper by the dozen');
            break;
        }
    break;
    case false:
        let anprompt = prompt('Enter correct number');
        let annum = parseInt(anprompt);
            switch(annum >= 1 && annum <= 10) {
                case true:
                    switch(annum) {
                        case 1:
                            alert('Back to square 1');
                        break;
                        case 2:
                            alert('Goody 2-shoes');
                        break;
                        case 3:
                            alert("Two's company, three's a crowd");
                        break;
                        case 4:
                            alert('Counting sheep');
                        break;
                        case 5:
                            alert('Take five');
                        break;
                        case 6:
                            alert("Two's company, three's a crowd");
                        break;
                        case 7:
                            alert('Seventh heaven');
                        break;
                        case 8:
                            alert('Behind the eight-ball');
                        break;
                        case 9:
                            alert('Counting sheep');
                        break;
                        case 10:
                            alert('Cheaper by the dozen');
                        break;
                    }
                break;
                case false:
                    let annprompt = prompt('Enter CORRECT number! (last chance)');
                    let annnum = parseInt(annprompt);
                        switch(annnum >= 1 && annnum <= 10) {
                            case true:
                                switch(annnum) {
                                    case 1:
                                        alert('Back to square 1');
                                    break;
                                    case 2:
                                        alert('Goody 2-shoes');
                                    break;
                                    case 3:
                                        alert("Two's company, three's a crowd");
                                    break;
                                    case 4:
                                        alert('Counting sheep');
                                    break;
                                    case 5:
                                        alert('Take five');
                                    break;
                                    case 6:
                                        alert("Two's company, three's a crowd");
                                    break;
                                    case 7:
                                        alert('Seventh heaven');
                                    break;
                                    case 8:
                                        alert('Behind the eight-ball');
                                    break;
                                    case 9:
                                        alert('Counting sheep');
                                    break;
                                    case 10:
                                        alert('Cheaper by the dozen');
                                    break;
                                }
                            break;
                            case false:
                                // prompt("I said CORRECT!");
                                alert("oh man");
                                document.location.reload();
                            break;
                            }
                            break;
                            }
}
