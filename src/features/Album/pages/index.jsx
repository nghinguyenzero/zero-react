import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';
import { useStore, actions } from "./../../../store";
AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {

  const [state, dispatch] = useStore()
  const { datas, dataInput} = state
  console.log('data', dataInput)

    const albumList =[
        {id: 1, name: "Gum Jessi" , thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/b/3/0/3b3041e084c30c91e35ade649fc9d51f.jpg"},
        {id: 2, name: "Trung Quan" , thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/d/3/8/2d38d415b2e3012671f0d9f1e257ff48.jpg"},
        {id: 3, name: "Jessica" , thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/1/b/6/e1b6d5b0243fad6cca31212bd3e71ea0.jpg"},
        {id: 4, name: "Pháo" , thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/c/0/8/ac08f4cf4bca8ecd66293aa181d2a8cd.jpg"}
    ]

    function handleAdd () {
        dispatch(actions.addData(dataInput))

    }
    return (
        <div>
            <h2>You will like it !</h2>
            <AlbumList albumList={albumList}/>
            <h2>Input todo !</h2>

            <input value={dataInput}
            onChange={ e => {
                dispatch(actions.setDataInput(e.target.value))
            }}
            ></input>
            <button onClick={handleAdd}>Add</button>

            {datas.map((data, idx)=> (
                <li key={idx}>{data}</li>
            )

            )}
            
        </div>
    );
}

export default AlbumFeature;