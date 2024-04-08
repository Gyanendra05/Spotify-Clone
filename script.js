// Initialize the Variables
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.querySelector("#myProgressBar");
let gif = document.querySelector("#gif");
let songItems =Array.from(document.querySelectorAll(".songItem"));
// let songItemPlay =Array.from( document.querySelectorAll(".songItemPlay"));

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let songs = [
    {songName: "Brown Rang", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Dekha hazaro dafa", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Habibi", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Belly dancer", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Jaadugar", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Kabhi to paas mere aao", filePath: "songs/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Mann Mera", filePath: "songs/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Tere Sang Yara", filePath: "songs/8.mp3", coverPath: "cover/8.jpg"},
    {songName: "Krishna hai vistar", filePath: "songs/9.mp3", coverPath: "cover/9.jpg"},
    {songName: "Shape of You", filePath: "songs/10.mp3", coverPath: "cover/10.jpg"},
    {songName: "Standing by You", filePath: "songs/11.mp3", coverPath: "cover/11.jpg"},
    {songName: "Tum Prem ho", filePath: "songs/12.mp3", coverPath: "cover/12.jpg"},
    {songName: "Break Up Party", filePath: "songs/13.mp3", coverPath: "cover/13.jpg"}
];

songItems.forEach((ele,i)=>{
    ele.getElementsByTagName("img")[0].src = songs[i].coverPath;
    ele.querySelectorAll(".songName")[0].innerText = songs[i].songName;
})

// Handle Play/Pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
// Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);

    myProgressBar.value = progress;

});

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
});
/*
const makeAllPlays = ()=>{
    songItemPlay.forEach((ele)=>{
        ele.classList.remove("fa-circle-pause");
        ele.classList.add("fa-circle-play");
    })
}
*/
const makeAllPlays = () =>{
     Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
     })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        songIndex  = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex +1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        
    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=12){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex +1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    // gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 12;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex +1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

