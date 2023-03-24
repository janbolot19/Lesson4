
const btn = document.querySelector('.btn')

  btn.addEventListener('click', () => {
      const reguest = new XMLHttpRequest()
      reguest.open("GET", "peoples.json")
      reguest.setRequestHeader("Content-type", "application/json")
      reguest.send()
      reguest.addEventListener('load', () => {
          console.log(reguest.response);
          // const peoples = JSON.parse(reguest.response)
          // document.querySelector('.name').innerHTML = peoples.name
          // document.querySelector('.age').innerHTML = peoples.age
      })
  })

