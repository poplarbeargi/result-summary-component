fetch('./data.json')
  .then(response => response.json())  
  .then(data => {                    
    const summaryItems = document.querySelectorAll('.summary-item'); 

    summaryItems.forEach((item, index) => {
      const scoreElement = item.querySelector('.summary-score span'); 
      scoreElement.textContent = data[index].score; 
    });
  })
  .catch(error => { 
    console.error('Error fetching the JSON file:', error);
  });
