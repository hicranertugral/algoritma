export const getMaxValueFromArray = (arr: number[]) => {
    if (arr.length === 0) {
        return 0;
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}




export const bubbleSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length) - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

export const selectionSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        let minValue!: number;
        let minValueIndex:number = i;

        for (let k = i; k < arr.length; k++) {
            if (typeof minValue === 'undefined') {
                minValue = arr[k];
            } else if (minValue > arr[k]) {
                minValue = arr[k];
                minValueIndex = k;
            }
        }


        const temp = arr[i];
        arr[i] = minValue;
        arr[minValueIndex] = temp;
    }
}
