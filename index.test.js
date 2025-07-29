const utils=require('.')
const { data } = require('./data')

// testing simple function
test("1. adding two numbers",()=>{
    expect(utils.add(1,2)).toBe(3)
})

// testing asynchronous code
test("2. test-testing asynchronous function",async()=>{
    const data=await utils.fetchData()
    expect(data).toBe('Data Loaded')
},6000)

// mocking
test('3. testing API calls',async()=>{
jest.spyOn(utils,'fetchData').mockResolvedValue(data)
const result=await utils.fetchData();
expect(result?.[0]?.data?.capacity).toBe('128 GB')
})


// testing json objects
test('4. testing json object output',async()=>{
    const result=await utils.fetchData()
    expect(result).toEqual(data)
})