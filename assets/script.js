/**
 * tools 
 * jquery, moment
 * 
 * paige load section 
 * current day
 * use moment to get current day 
 * render current day on paige  
 * 9am- 5pm list of time blocks 
 * get time block data from local storage
 * fill in time blocks with data
 * time blocks are color coded
 * past time blocks will be red 
 * future time blocks will be green
 * present time blocks will be blue 
 * some may have events 
 * 
 * when user clicks time block 
 *  add event listener to time block container
 * 
 *  user can enter text in that block
 *  change clicked time block into input element 
 * save button is rendered
 * 
 * user clicks save button 
 *  store text in locally storage
 *  
 * 
 * 
 */

let blockData = [
    {
        event: "Breakfast",
        hour: 9
    }, 
    {
        event: "meeting with boss",
        hour: 10
    }, 
    {
        event: "meeting with client",
        hour: 11
    }, 
    {
        event: "Lunch",
        hour: 12
    }, 
    {
        event: "call client 2",
        hour: 13
    }, 
    {
        event: "interview",
        hour: 14
    }, 
    {
        event: "show house to client 2 ",
        hour: 15
    }, 
    {
        event: "check email from 11 am client ",
        hour: 16
    }, 
    {
        event: "alert team you are leaving for the day",
        hour: 17
    }, 
]
const currentDateElement = $(".current-date");
const currentDate = moment().format("dddd, MMMM Do YYYY");
let currentTIme = moment().format("h:mm:ss a");
console.log("date",currentDate);
currentDateElement.text(currentDate);
let currentBlockData = getcurrentblockdata();
console.log (currentBlockData);
saveCurrentBlockData();
updateBlockDOM();

function getcurrentblockdata(){
    //get current data from loacl storage
    let data = JSON.parse(localStorage.getItem(currentDate));
    console.log(data);
    if(!data){
        data = newBlockData();

    }
    return data 

}
function newBlockData (){
    return [...blockData];
} 
function saveCurrentBlockData(){
    let blockDataString = JSON.stringify(currentBlockData);
    localStorage.setItem(currentDate, blockDataString);
    
}
function updateBlockDOM(){
    let currentData = getcurrentblockdata(); 
    let currentHour = moment().hour();
    let timeBlocks = $(".timeblock");
    console.log(currentData,currentHour,timeBlocks);
    timeBlocks.each(function (index,block){
        let blockHour = currentData[index].hour
        console.log(blockHour, index);
        let $block = $(block); 
        if (currentHour>blockHour){
            $block.addClass("past");
        } else if (currentHour===blockHour){
            $block.addClass("current");
        } else {
            $block.addClass("future");
            
        }
        $block.text(currentData[index].event);

        });


    // get current block data, current hour of day 
    // get array of block elements 
    // iterate over array
        // check if current block hour is past, present, future add css class 
        // add event for that hour if there is one 
}
