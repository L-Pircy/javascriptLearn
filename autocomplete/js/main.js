const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search the stmates.json and filter it
const searchStates = async searchText => {
    const res = await fetch('data/states.json');
    const states = await res.json();

    // Get mathes to current text input
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi'); // ^ means starts with, gi means global and case insensitive
        return state.name.match(regex) || state.abbr.match(regex);
    });
    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }
    // console.log(states);
    // console.log(matches);
    outputHtml(matches);
}

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-4">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
        <small>Lat:${match.lat} / Long: ${match.long}</small>
        </div>
        `).join('');
        // console.log(html);
        matchList.innerHTML = html;
    }
    else if (matches.length === 0) {
        matchList.innerHTML = '';
    }
}

search.addEventListener('input', () => searchStates(search.value));