const todoList = {
    items: [
      {
        text: 'Завершить текущий челлендж',
        completed: false,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
    printAll: function () {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].text)
        }
    },
  
    add: function (newCase) {
        this.items.unshift ({text: newCase, completed: false})
        console.log(this.printAll())
    },
  
    remove: function (n) {
        let i = n
            this.items.splice(i, n)
    },
  
    print: function (index) {
        if (this.items[index].completed === false) {
            console.log(`[] ${this.items[index].text}`)
        } else {
            console.log(`[] ${this.items[index].text}`)
        }
        console.log(`${this.items[index].text[index]}`)
    },
  
    complete: function (index) {
        if (this.items[index].text.completed === true) {
            console.log(`[x] ${this.items[index].text}`)
        }
    } 
    
  };
  
console.log(todoList.add());
  