const {testCompareFile}=require('./testCompareFile.js')
test("5. testing compare file",async ()=>{
    const a=testCompareFile(1,1)
    expect(a).toBe(true)
})