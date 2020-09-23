const data = [
    {
        name: 'Isaac Stevenson',
        age: 31,
        gender: 'male',
        lookingfor: 'female',
        location: 'Dusiburg NRW',
        image: 'http://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Bishop Nathan',
        age: 30,
        gender: 'male',
        lookingfor: 'female',
        location: 'koln NRW',
        image: 'http://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name: 'joyce paul',
        age: 27,
        gender: 'female',
        lookingfor: 'male',
        location: 'frankfurt Hessen',
        image: 'http://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Francis Omon',
        age: 31,
        gender: 'male',
        lookingfor: 'female',
        location: 'Cuxhaven Hamburg ',
        image: 'http://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // No more profiles
        window.location.reload();
    }

}

// profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ?
             { value: profiles [nextIndex++], done: false } : { done: true}
        }
    };
}