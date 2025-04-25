const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul=>{
       ul.classList.remove('show') 
       ul.previousElementSibling.classList.remove('rotate')
    })
}

function toggleSubMenu(button) {
     button.nextElementSibling.classList.toggle('show')
     button.classList.toggle('rotate') 

     if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
     }
}

document.addEventListener('alpine:init', () => {
   Alpine.data('assetRequestForm', () => ({
     assets: [
       { name: 'Projector', total: 5, bookedDates: ['2025-04-27', '2025-04-30'] },
       { name: 'Laptop', total: 10, bookedDates: ['2025-04-26', '2025-05-01'] },
       { name: 'Mobile Cart', total: 3, bookedDates: ['2025-04-25'] },
     ],
     selectedAsset: '',
     startDate: '',
     endDate: '',
     today: new Date().toISOString().split('T')[0],
 
     get currentAsset() {
       return this.assets.find(a => a.name === this.selectedAsset);
     },
 
     isDateAvailable(date) {
       if (!this.currentAsset) return true;
       return !this.currentAsset.bookedDates.includes(date);
     },
 
     get availableAssetsLeft() {
       if (!this.currentAsset) return '-';
       const booked = this.currentAsset.bookedDates.filter(d => d >= this.startDate && d <= this.endDate).length;
       return this.currentAsset.total - booked;
     }
   }))
 });
 