/* Ionic components  */
import { IonApp, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRouterOutlet, IonRow, IonSplitPane, IonToolbar } from '@ionic/react';

/* personal components */
import Menu from './components/Menu';
import KeyPad from './components/KeyPad';
import Display from './components/Display';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Personal CSS File */
import './theme/Page.css';

/* react specific library */
import { Component } from 'react';

class App extends Component {
    state = {
        display: "0", /* what is currently displayed to the main screen(default display is zero) */
        expression: "", /* contains the expression the user inputs */
        answer: false, /* tells the system if the current display is the answer to a solution */
        log: ["Session Started"] /* holds a log of all expression and solutions during the current session */
    }

    /* renders the main content of the application on to the screen*/
    render() {
        return (
            <IonApp>
                <IonSplitPane contentId="main">
                    <Menu clickedFunction={this.showFromHistory} history={this.state.log} />
                    <IonRouterOutlet id="main">
                        <IonPage>
                            <IonHeader class="h-10">
                                <IonToolbar color="secondary" class="ion-align-items-end h-100">
                                    <IonButtons slot="start" color="light">
                                        <IonMenuButton class="bgFont" />
                                    </IonButtons>
                                </IonToolbar>
                            </IonHeader>
                            <IonContent>
                                <IonGrid>
                                    <IonRow class="ion-justify-content-center">
                                        <IonCol size="11.5">
                                            <Display answer={this.state.answer} equation={this.state.expression} key="display">{this.state.display}</Display>
                                        </IonCol>
                                    </IonRow>
                                    <KeyPad clickFunction={this.addToDisplay} createEquation={this.addToExpression} reset={this.clearDisplay} submit={this.giveSolution} />
                                </IonGrid>
                            </IonContent>
                        </IonPage>
                    </IonRouterOutlet>
                </IonSplitPane>
            </IonApp>
        );
    }

    /* will add numbers to the display based on user input */
    addToDisplay = (add: string) => {

        /* place current state information into variables so current state won't be effected till necessary */
        var display = this.state.display 
        var expression = this.state.expression

        /* 
         * check if the current number displayed is an answer 
         * if yes then clear the screen and replace it with users input
         * also tell system the the current display isn't an answer
         */
        if (this.state.answer) {
            var answer = false
            display = "0"
            this.setState({ answer, display })
        } else {

            /* 
             * check if users input is a "."
             * if it isn't then check if display is currently "0"
             * if yes then just replace "0" with users input
             * if no then add users input to the current displayed number
             */
            if (add != ".") {
                (display == "0") ? display = add : display = display + add
                expression = expression + add /*add users input to mini display wich will always show the user input expression */
                this.setState({ display, expression }) 
            } else {

                /*
                 * if users input is "."
                 * then check if the current displayed number already has a "."
                 * if not then add it to the current main display and mini display
                 */
                if (!display.includes(".")) {
                    display = display + add
                    expression = expression + add
                    this.setState({ display, expression })
                }
            }
        }
    }

    /*
     * excuted when the user inputs an operation key
     * this method will clear the screen and adds the operator input
     * to the mini display which will keep track of users input
     */
    addToExpression = (add: string) => {

        /* place current state information into variables so current state won't be effected till necessary */
        var display = this.state.display
        var expression = this.state.expression
        var answer = this.state.answer

        /* split the expression into an array */
        var splitExpression = expression.split(" ")

        /*
         * check if the current item displayed is an answer
         * if it is start the expression on the mini display with current
         * item displayed placing the operator after it, while also telling
         * the system to clear the screen and its no longer displaying an answer
         */
        if (answer) {
            expression = display + add
        } else {

            /*
             * if the current display isnt an answer check to see if the
             * current expression ends with an operator, if it doesn't then
             * add the user input operator into the expression
             */
            if (splitExpression[splitExpression.length-1] != "") {
                expression = this.state.expression + add
            }            
        }

        /* clear screen and tell system that the current displayed item isnt an answer */
        display = "0"
        answer = false
        this.setState({ answer, display, expression })
    }

    /*
     * this method solves the users expression once the "=" key is clicked
     */
    giveSolution = () => {

        /* place current state information into variables so current state won't be effected till necessary */
        var expression = this.state.expression
   
        /* split the expression into an array */
        var solve = expression.split(" ")

        /*
         * checks to see if expression ends with an operator or if it only contains one number or if its empty
         * if any conditions exist do nothing otherwise continue to solve the expression
         */
        if (expression != "" && solve.length > 1 && solve[solve.length - 1] != "") {
            /* create an array to hold the order in which the system will deal with the operations */
            var orderOfOperations = []

            /* make a temporary array of the expression to be solved */
            var tempArray = solve

            /* make a variable to hold the solution to be displayed */
            var solution

            /* go through the expression and find all the multiplaction and divsion operations and keep track of there order */
            for (var i = 0; i < solve.length; i++) {
                if (solve[i] == "*" || solve[i] == "/") {
                    orderOfOperations.push(solve[i])
                }
            }

            /* do the same for the addition and subtraction operators */
            for (var i = 0; i < solve.length; i++) {
                if (solve[i] == "+" || solve[i] == "-") {
                    orderOfOperations.push(solve[i])
                }
            }

            /* go through the array with operations and find the first instance of that operator in the expression array */
            for (var i = 0; i < orderOfOperations.length; i++) {
                var index = solve.indexOf(orderOfOperations[i])

                /* 
                 * once the first occurance is found determine which operator it is
                 * then the system will grab the two numbers next to the operator
                 * and it will be placed into the solution variable
                 */
                switch (orderOfOperations[i]) {
                    case "+":
                        solution = parseFloat(solve[index - 1]) + parseFloat(solve[index + 1])
                        break
                    case "-":
                        solution = parseFloat(solve[index - 1]) - parseFloat(solve[index + 1])
                        break
                    case "*":
                        solution = parseFloat(solve[index - 1]) * parseFloat(solve[index + 1])
                        break
                    case "/":
                        solution = parseFloat(solve[index - 1]) / parseFloat(solve[index + 1])
                        break
                }

                /* empty the expression array */
                solve = []

                /* using the temporary array copy all the elements over to the expression array skipping over the elements that were used in the previous step */
                for (var c = 0; c < tempArray.length; c++) {
                    if (c == index - 1) {
                        solve.push(solution + "")
                        c = c + 2
                    } else {
                        solve.push(tempArray[c])
                    }
                }

                /* replace the temporary array with the new expression */
                tempArray = solve
            }

            /*
             * once the loop is done the solution variable should hold the final answer
             * so the system will place the expression with its solution into the history log array
             * it will also replace the current display with the answer telling the system that the
             * current display is an answer making the font green
             */
            this.addToLog(expression + " = " + solution);
            var display = solution
            expression = "" /* clear the expression */
            var answer = true
            this.setState({ answer, display, expression })
        }
    }

    /* changes all the state information to defualt "clearing the display" */
    clearDisplay = () => {
        var answer = false
        var display = "0"
        var expression = ""
        this.setState({ answer, display, expression })
    }

    /* adds the solved expression into the history log page for this current session */
    addToLog = (add: string) => {
        var log = this.state.log
        log.push(add)
        this.setState({log})
    }

    /* takes the solution of a previously solved expression and adds it to the display */
    showFromHistory = (add: string) => {

        /*
         * checks to see if the user clicked on the session start on the history log
         * if yes do nothing other wise continue
         */
        if (add != "Session Started") {

            /* place current state information into variables so current state won't be effected till necessary */
            var expression = this.state.expression

            /* split the current expression into an array */
            var splitExpression = expression.split(" ")

            /* split the old expression into an array */
            var addSplit = add.split(" ")

            /* get the soltion from the old expression */
            var numberToDisplay = addSplit[addSplit.length - 1]

            /*
             * check to see if the current expression has more then one item
             * if not then replace the current display with the solution from
             * the history log, also tell the system the current display is not an answer
             */
            if (splitExpression.length <= 1) {
                expression = numberToDisplay
                var display = numberToDisplay
                var answer = false
                this.setState({ answer, display, expression })
            } else {

                /*
                 * if current expression has multiple items check to see if it ends with an operator
                 * if it does just add the solution from the history log into the expression and display it
                 * also tell system that the current display isn't a solution
                 */
                if (splitExpression[splitExpression.length - 1] == "") {
                    expression = expression + numberToDisplay
                    var display = numberToDisplay
                    var answer = false
                    this.setState({ answer, display, expression })
                }
            }
        }
    }
}

export default App;
