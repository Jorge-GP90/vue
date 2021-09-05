new Vue({
    el: '#app',
    data: {
      name: 'A mountain B ro',
      course: 'Web Engineer Course',
      acceptancePeriod: 'January 2019',
      defaultLastId: 3,
      students: [
        { id: 1, name: 'Hiroyoshi Noro', course: 'Machine learning course', acceptancePeriod: 'January 2019' },
        { id: 2, name: 'Shuji Tominaga', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' },
        { id: 3, name: 'Kazuki Saito', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' }
      ]
    },
    methods: {
      addStudent: function() {
        this.students.push(
            { id: ++this.defaultLastId , name: this.name, course: this.course , acceptancePeriod: this.acceptancePeriod }
            )
        this.name = ''; this.course = ''; this.acceptancePeriod = '';
      }
    }
  })