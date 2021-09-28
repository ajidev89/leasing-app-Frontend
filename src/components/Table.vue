<template>
    <div class="mt-5">
        <input type="text" name="search" class="border-2 px-3 py-2 rounded focus:outline-none focus:border-purple-800" placeholder="Search Tenant" id="search">
        <table class="mt-5 md:w-full  overscroll-auto">
            <thead class="bg-gray-100 p-8">
                <tr>
                    <th class="py-4 px-2 w-96 text-left">Tenant Name</th>
                    <th class="py-4 px-2 text-left">Property in use</th>
                    <th class="py-4 px-2 text-left">Status</th>
                    <th class="py-4 px-2 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b-2">
                    <td class="py-4 px-2">Ajidagba Ayobami</td>
                    <td class="py-4 px-2">LEKKI VILLA: DELUXE-2</td>
                    <td class="py-4 px-2">
                        <span class="bg-red-600 text-gray-100 text-sm rounded-full px-2 py-1" >
                            Expired
                        </span>
                    </td>
                    <td class="py-4 flex justify-center space-x-2 px-2">
                       <button class="bg-purple-800 rounded py-1 px-3 text-gray-100"><edit-2-icon width="16" class="stroke-current"></edit-2-icon></button>
                       <button class="bg-red-600 rounded py-1 px-3 text-gray-100"><trash-icon width="16" class="stroke-current"></trash-icon></button>       
                    </td>
                </tr>
                <tr class="border-b-2">
                    <td class="py-4 px-2">Badmus Jide</td>
                    <td class="py-4 px-2">ABEOKUTA RISING: BASIC-2</td>
                    <td class="py-4 px-2">
                        <span class="bg-green-600 text-gray-100 text-sm rounded-full px-2 py-1" >
                            Renewed
                        </span>
                    </td>
                    <td class="py-4 flex justify-center space-x-2 px-2">
                       <button class="bg-purple-800 rounded py-1 px-3 text-gray-100"><edit-2-icon width="16" class="stroke-current"></edit-2-icon></button>
                       <button class="bg-red-600 rounded py-1 px-3 text-gray-100"><trash-icon width="16" class="stroke-current"></trash-icon></button>       
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Edit2Icon from 'vue-feather-icon/components/edit-2.vue'
import TrashIcon  from 'vue-feather-icon/components/trash-2.vue'

  export default {
    name: 'Cars',
    components: {
      Edit2Icon,TrashIcon
    },
    data() {
      return {
        cols: ['Make', 'Model', 'Year', 'Color'],
        rows: [
          ['Ford', 'Fusion', '2011', 'Silver'],
          ['Chevrolet', 'Cruz', '2018', 'White']
        ]
      }
    }
  }
</script>