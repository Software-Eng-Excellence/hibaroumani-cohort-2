

export interface IMapper<T,U> {
  map(data: T): U;//input: 1D array of strings,output: Cake Object
}
