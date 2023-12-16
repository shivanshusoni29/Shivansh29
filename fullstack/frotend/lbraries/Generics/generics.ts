interface Isecurity<T>{
    leg:T
    eyes:number
    nose?:number
}

let Me: Isecurity<number>={
    leg: 2,
    eyes: 2,
}
 Me.nose=1

 let She: Isecurity<string>={
    leg:"My teo legs",
    eyes: 2,
 }


She.nose=1



