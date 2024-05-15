import { useParams } from "wouter"
import { isValidNcode } from "./until"
import { use } from "preact/hooks"

export default function syoukai() {
    const params = useParams()
    const ncode = params.ncode
    if (!ncode) {return <><h2>ncodeが指定されていません</h2></> }
    if (!isValidNcode(ncode)) {return <><h2>ncodeの形が不正です。</h2></>}
    
    return(
        <>
          <h2>kais</h2>
          <p>{params.ncode}</p>
        </>
    )
}