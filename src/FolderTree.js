import { useState } from "react";


function FolderTree() {
    return (
        <div>


            <Folder name='my_desktop' size='12Mb'>
                <Folder name='music' size='2.3Gb'>
                    <File name='paint_it_black.mp4' />
                    <File name='the_river.mp4' />
                    <File name='hallowed_be_thy_name.mp4' />
                </Folder>
                <File name='recipe.doc' />
                <File name='mega_excel.xls' />
            </Folder>
            <Folder name='pictures' size='6Gb'>
                <File name='cats1.jpg' />
                <File name='cats23.tiff' />
                <File name='cats44.jpg' />
                <File name='cats56.jpg' />
                <File name='cats71.jpg' />
            </Folder>

        </div >
    );
}

const Folder = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const { name, children } = props; //destructure name, isopen and chldren from props(so i don't need to write props all the time)
    const direction = isOpen ? 'down' : 'right'

    const handleClick = () => setIsOpen(!isOpen)


    return (
        <div >
            <span onClick={handleClick}>
                <i className="blue folder icon"></i>
                <i className={`caret ${direction} icon`}></i>  {/* use backtick interpolate strings in JS*/}
            </span>
            { name}
            <div style={{ marginLeft: '17px' }}>
                {isOpen ? children : null}
            </div>

        </div >
    )

};

const File = (props) => {
    const { name } = props;
    const fileExtension = name.split('.')[1];
    const fileIcons = {
        mp4: 'headphones',
        jpg: 'file image outline',
        tiff: 'file image'

    }

    return (
        <div>
            <i className={`${fileIcons[fileExtension]} icon`}></i>
            {name}
        </div>
    )
};

export default FolderTree;